import prisma from '@typebot.io/lib/prisma'

import { Plan } from '@typebot.io/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  sanitizeSettings,
  sanitizeFolderId,
  sanitizeVariables,
} from '../../../features/typebot/helpers/sanitizers'

import { TypebotV6, typebotV6Schema } from '@typebot.io/schemas'

export async function checkPermission(key: string) {
  try {
    const authorized = await prisma.embed.findFirst({
      where: {
        hash: key,
      },
    })
    if (authorized == null) {
      return false
    }
  } catch (err) {
    return false
  }
  return true
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const workspaceId = req.body.workspaceId

  try {
    const customkey = req.headers.customkey?.toString()
    if (!customkey || (await checkPermission(customkey)) === false) {
      return res.status(407).json({ url: null })
    }
  } catch (err) {
    return res.status(407).json({ url: null })
  }

  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId },
    select: { id: true, members: true, plan: true },
  })

  if (!workspace) return

  const newTypebot = await prisma.typebot.create({
    data: {
      version: '6',
      workspaceId,
      name: req.body.typebot.name,
      icon: req.body.typebot.icon,
      selectedThemeTemplateId: req.body.typebot.selectedThemeTemplateId,
      groups: req.body.typebot.groups,
      events: req.body.typebot.events ?? undefined,
      theme: req.body.typebot.theme ? req.body.typebot.theme : {},
      settings: req.body.typebot.settings
        ? sanitizeSettings(req.body.typebot.settings, workspace.plan, 'create')
        : workspace.plan === Plan.FREE
        ? {
            general: {
              isBrandingEnabled: true,
            },
          }
        : {},
      folderId: await sanitizeFolderId({
        folderId: req.body.typebot.folderId,
        workspaceId: workspace.id,
      }),
      variables: req.body.typebot.variables
        ? sanitizeVariables({
            variables: req.body.typebot.variables,
            groups: req.body.typebot.groups,
          })
        : [],
      edges: req.body.typebot.edges ?? [],
      resultsTablePreferences:
        req.body.typebot.resultsTablePreferences ?? undefined,
    } satisfies Partial<TypebotV6>,
  })

  const parsedNewTypebot = typebotV6Schema.parse(newTypebot)

  return res.json({ typebot: parsedNewTypebot })
}

export default handler
