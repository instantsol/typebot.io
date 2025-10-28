import { z } from '../../../../zod'
import { variableStringSchema } from '../../../utils'
import { blockBaseSchema } from '../../shared'
import { BubbleBlockType } from '../constants'

export const embedBubbleContentSchema = z.object({
  url: z.string().optional(),
  filename: z.string().optional(),
  link: z
    .object({
      isEnabled: z.boolean().optional(),
      text: z.string().optional(),
      name: z.string().optional(),
      url: z.string().optional(),
    })
    .optional(),
  height: z.number().or(variableStringSchema).optional(),
  waitForEvent: z
    .object({
      isEnabled: z.boolean().optional(),
      name: z.string().optional(),
      saveDataInVariableId: z.string().optional(),
    })
    .optional(),
})

export const embedBubbleBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([BubbleBlockType.EMBED]),
    content: embedBubbleContentSchema.optional(),
  })
)

export type EmbedBubbleBlock = z.infer<typeof embedBubbleBlockSchema>
