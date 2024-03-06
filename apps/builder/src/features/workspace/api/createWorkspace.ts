import prisma from '@typebot.io/lib/prisma'
import { authenticatedProcedure } from '@/helpers/server/trpc'
import { TRPCError } from '@trpc/server'
import { Workspace, workspaceSchema } from '@typebot.io/schemas'
import { z } from 'zod'
import { parseWorkspaceDefaultPlan } from '../helpers/parseWorkspaceDefaultPlan'
import { trackEvents } from '@typebot.io/lib/telemetry/trackEvents'
import { listCredentials } from '@/features/forge/api/credentials/listCredentials'
import { createCredentials } from '@/features/forge/api/credentials/createCredentials'

export const createWorkspace = authenticatedProcedure
  .meta({
    openapi: {
      method: 'POST',
      path: '/v1/workspaces',
      protect: true,
      summary: 'Create workspace',
      tags: ['Workspace'],
    },
  })
  .input(z.object({ icon: z.string().optional(), name: z.string() }))
  .output(
    z.object({
      workspace: workspaceSchema.omit({
        chatsLimitFirstEmailSentAt: true,
        chatsLimitSecondEmailSentAt: true,
        storageLimitFirstEmailSentAt: true,
        storageLimitSecondEmailSentAt: true,
        customChatsLimit: true,
        customSeatsLimit: true,
        customStorageLimit: true,
        additionalChatsIndex: true,
        additionalStorageIndex: true,
        isQuarantined: true,
      }),
    })
  )
  .mutation(async ({ input: { name, icon }, ctx: { user } }) => {
    const existingWorkspaceNames = (await prisma.workspace.findMany({
      where: {
        members: {
          some: {
            userId: user.id,
          },
        },
      },
      select: { name: true },
    })) as Pick<Workspace, 'name'>[]

    if (existingWorkspaceNames.some((workspace) => workspace.name === name))
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Workspace with same name already exists',
      })

    const plan = parseWorkspaceDefaultPlan(user.email ?? '')

    const newWorkspace = (await prisma.workspace.create({
      data: {
        name,
        icon,
        members: { create: [{ role: 'ADMIN', userId: user.id }] },
        plan,
      },
    })) as Workspace

    /*
    create default Instant provider
     */
    const exist = await listCredentials({
      workspaceId: newWorkspace.id,
      userId: user.id,
      type: 'instantchat',
    })

    if (!exist.credentials || exist.credentials.length === 0) {
      const host = user.email.split('@')[0]
      await createCredentials({
        credentials: {
          data: {
            baseUrl: 'https://' + host,
            name: 'Instant AIO',
            type: 'instantchat',
            workspaceId: newWorkspace.id,
          },
        },
        user,
      })
    }

    await trackEvents([
      {
        name: 'Workspace created',
        workspaceId: newWorkspace.id,
        userId: user.id,
        data: {
          name,
          plan,
        },
      },
    ])

    return {
      workspace: newWorkspace,
    }
  })
