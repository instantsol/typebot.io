import { FormLabel, Stack } from '@chakra-ui/react'
import { DropdownList } from '@/components/DropdownList'
import { RatingInputBlock, Variable } from '@typebot.io/schemas'
import React, { useState } from 'react'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { NumberInput, TextInput, Textarea } from '@/components/inputs'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { defaultRatingInputOptions } from '@typebot.io/schemas/features/blocks/inputs/rating/constants'
import { useTranslate } from '@tolgee/react'
import { tolgee } from '@/lib/tolgee'

const survey_type_object = [
  { label: 'NPS', value: 'NPS' },
  { label: 'CSAT', value: 'CSAT' },
  { label: tolgee.t('blocks.inputs.rating.type.numbers'), value: 'NUMBER' },
  //{'label': tolgee.t('blocks.inputs.rating.type.comment'), value: 'COMMENT'}
]

type SurveyType = (typeof survey_type_object)[number]['label']

type Props = {
  options: RatingInputBlock['options']
  onOptionsChange: (options: RatingInputBlock['options']) => void
}

export const RatingInputSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()
  const [key, setKey] = useState(0)

  const handleLengthChange = (length: number) => {
    const update = { ...options, length: length }
    if (options && length < Number(options?.startsAt || 0))
      update.startsAt = length - 1
    onOptionsChange(update)
    setKey(Math.random())
  }

  const handleSurveyNameChange = (name: string) => {
    onOptionsChange({ ...options, name: name })
  }

  const handleTypeSurveyChange = (type: SurveyType) => {
    const update = { ...options, type: type }
    switch (type) {
      case 'NPS':
        update.length = 10
        update.startsAt = 0
        update.buttonType = 'Numbers'
        break
      case 'CSAT':
        update.length = 5
        update.startsAt = 1
        update.buttonType = 'Numbers'
        break
      case 'NUMBER':
        break
      case 'COMMENT':
        update.length = 10
        update.startsAt = 0
        update.buttonType = 'Numbers'
        break
      default:
        break
    }
    onOptionsChange(update)
    setKey(Math.random())
  }

  const handleUpdateMessage = (text: string) =>
    onOptionsChange({ ...options, text: text })

  // const handleTypeChange = (buttonType: 'Icons' | 'Numbers') =>
  //   onOptionsChange({ ...options, buttonType })

  const handleCustomIconCheck = (isEnabled: boolean) =>
    onOptionsChange({
      ...options,
      customIcon: { ...options?.customIcon, isEnabled },
    })

  const handleIconSvgChange = (svg: string) =>
    onOptionsChange({ ...options, customIcon: { ...options?.customIcon, svg } })

  const handleLeftLabelChange = (left: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, left } })

  const handleRightLabelChange = (right: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, right } })

  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })

  const handleVariableChange = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })

  const handleOneClickSubmitChange = (isOneClickSubmitEnabled: boolean) =>
    onOptionsChange({ ...options, isOneClickSubmitEnabled })

  const updateStartsAt = (startsAt: number | `{{${string}}}` | undefined) => {
    if (options && (options.length || 2) < Number(startsAt || 0))
      startsAt = options.length || 2
    onOptionsChange({ ...options, startsAt })
    setKey(Math.random())
  }

  const length = options?.length ?? defaultRatingInputOptions.length
  const isOneClickSubmitEnabled =
    options?.isOneClickSubmitEnabled ??
    defaultRatingInputOptions.isOneClickSubmitEnabled

  const buttonType = options?.buttonType ?? defaultRatingInputOptions.buttonType
  const type = options?.type ?? survey_type_object[0].label
  return (
    <Stack spacing={4}>
      <Stack>
        <TextInput
          label={t('blocks.inputs.rating.name')}
          defaultValue={options?.name || ''}
          onChange={handleSurveyNameChange}
        />
      </Stack>
      <Stack>
        <FormLabel mb="0" htmlFor="button">
          {t('blocks.inputs.rating.type.label')}
        </FormLabel>
        <DropdownList
          onItemSelect={handleTypeSurveyChange}
          items={survey_type_object}
          currentItem={type}
        />
      </Stack>
      <Stack>
        <Textarea
          width="full"
          placeholder={t('blocks.inputs.rating.text')}
          defaultValue={options?.text || ''}
          onChange={handleUpdateMessage}
        />
      </Stack>

      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        key={`variable-stack-key-${key}`}
      >
        <Stack direction={'column'} width={'100%'} sx={{ width: '100%' }}>
          <FormLabel mb="0" htmlFor="button">
            {t('blocks.inputs.rating.settings.maximum.label')}
          </FormLabel>
          <DropdownList
            isDisabled={options?.type !== 'NUMBER'}
            onItemSelect={handleLengthChange}
            items={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
            currentItem={length}
          />
        </Stack>
        <Stack width={'100%'}>
          {buttonType === 'Numbers' && (
            <NumberInput
              isDisabled={options?.type !== 'NUMBER'}
              defaultValue={
                options?.startsAt ?? defaultRatingInputOptions.startsAt
              }
              onValueChange={updateStartsAt}
              label={t('blocks.inputs.rating.settings.startsat.label')}
              direction="column"
            />
          )}
        </Stack>
      </Stack>

      {/* <Stack>
        <FormLabel mb="0" htmlFor="button">
          {t('blocks.inputs.rating.settings.type.label')}
        </FormLabel>
        <DropdownList
          onItemSelect={handleTypeChange}
          items={['Icons', 'Numbers'] as const}
          currentItem={buttonType}
        />
      </Stack> */}

      {buttonType === 'Icons' && (
        <SwitchWithLabel
          label={t('blocks.inputs.rating.settings.customIcon.label')}
          initialValue={
            options?.customIcon?.isEnabled ??
            defaultRatingInputOptions.customIcon.isEnabled
          }
          onCheckChange={handleCustomIconCheck}
        />
      )}
      {buttonType === 'Icons' && options?.customIcon?.isEnabled && (
        <TextInput
          label={t('blocks.inputs.rating.settings.iconSVG.label')}
          defaultValue={options.customIcon.svg}
          onChange={handleIconSvgChange}
          placeholder="<svg>...</svg>"
        />
      )}
      {options?.type !== 'COMMENT' && (
        <TextInput
          label={t('blocks.inputs.rating.settings.rateLabel.label', {
            rate:
              buttonType === 'Icons'
                ? '1'
                : options?.startsAt ?? defaultRatingInputOptions.startsAt,
          })}
          defaultValue={options?.labels?.left}
          onChange={handleLeftLabelChange}
          placeholder={t(
            'blocks.inputs.rating.settings.notLikely.placeholder.label'
          )}
        />
      )}
      {options?.type !== 'COMMENT' && (
        <TextInput
          label={t('blocks.inputs.rating.settings.rateLabel.label', {
            rate: length,
          })}
          defaultValue={options?.labels?.right}
          onChange={handleRightLabelChange}
          placeholder={t(
            'blocks.inputs.rating.settings.extremelyLikely.placeholder.label'
          )}
        />
      )}
      <SwitchWithLabel
        label={t('blocks.inputs.rating.settings.oneClickSubmit.label')}
        moreInfoContent={t(
          'blocks.inputs.rating.settings.oneClickSubmit.infoText.label'
        )}
        initialValue={isOneClickSubmitEnabled}
        onCheckChange={handleOneClickSubmitChange}
      />
      {!isOneClickSubmitEnabled && (
        <TextInput
          label={t('blocks.inputs.settings.button.label')}
          defaultValue={
            options?.labels?.button ?? defaultRatingInputOptions.labels.button
          }
          onChange={handleButtonLabelChange}
        />
      )}
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          {t('blocks.inputs.settings.saveAnswer.label')}
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={handleVariableChange}
        />
      </Stack>
    </Stack>
  )
}
