/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { Select } from '@/components/inputs/Select'
import { VariablesButton } from '@/features/variables/components/VariablesButton'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { useToast } from '@/hooks/useToast'
import { trpc } from '@/lib/trpc'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Stack,
} from '@chakra-ui/react'
import {
  ForgedBlockDefinition,
  ForgedBlock,
} from '@typebot.io/forge-repository/types'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1)

type Props = {
  blockDef: ForgedBlockDefinition
  defaultValue?: string
  fetcherId: string
  options: ForgedBlock['options']
  placeholder?: string
  label?: string
  helperText?: ReactNode
  moreInfoTooltip?: string
  direction?: 'row' | 'column'
  isRequired?: boolean
  width?: 'full'
  withVariableButton?: boolean
  onChange: (value: string | undefined) => void
}
export const ForgeSelectInput = ({
  defaultValue,
  fetcherId,
  options,
  blockDef,
  placeholder,
  label,
  helperText,
  moreInfoTooltip,
  isRequired,
  direction = 'column',
  width,
  withVariableButton = false,
  onChange,
}: Props) => {
  const { workspace } = useWorkspace()
  const { showToast } = useToast()
  const [search, setSearch] = useState('')

  const baseFetcher = useMemo(() => {
    const fetchers = blockDef.fetchers ?? []
    return fetchers.find((fetcher) => fetcher.id === fetcherId)
  }, [blockDef.fetchers, fetcherId])

  const actionFetcher = useMemo(() => {
    if (baseFetcher) return
    const fetchers = blockDef.actions.flatMap((action) => action.fetchers ?? [])
    return fetchers.find((fetcher) => fetcher.id === fetcherId)
  }, [baseFetcher, blockDef.actions, fetcherId])

  const depValues = useMemo(() => {
    const deps = (baseFetcher?.dependencies ??
      actionFetcher?.dependencies ??
      []) as string[]
    return deps.map((k) => (options as Record<string, unknown>)?.[k])
  }, [baseFetcher, actionFetcher, options])

  const depValuesKey = JSON.stringify(depValues)
  const prevDepValuesKeyRef = useRef(depValuesKey)

  useEffect(() => {
    if (prevDepValuesKeyRef.current !== depValuesKey) {
      prevDepValuesKeyRef.current = depValuesKey
      if (defaultValue !== undefined) {
        onChange(undefined)
      }
    }
  }, [depValuesKey])

  const newOptions = {
    ...options,
  }

  if (search) newOptions.search = search
  else newOptions.group_id = defaultValue

  const { data } = trpc.forge.fetchSelectItems.useQuery(
    {
      integrationId: blockDef.id,
      options: pick(newOptions, [
        ...(actionFetcher ? ['action'] : []),
        ...(blockDef.auth ? ['credentialsId'] : []),
        ...((baseFetcher
          ? baseFetcher.dependencies
          : actionFetcher?.dependencies) ?? []),
      ]),
      workspaceId: workspace?.id as string,
      fetcherId,
    },
    {
      enabled: !!workspace?.id && (!!baseFetcher || !!actionFetcher),
      onError: (error) => {
        showToast({
          description: error.message,
          status: 'error',
        })
      },
    }
  )

  return (
    <FormControl
      isRequired={isRequired}
      as={direction === 'column' ? Stack : HStack}
      justifyContent="space-between"
      width={label || width === 'full' ? 'full' : 'auto'}
      spacing={direction === 'column' ? 2 : 3}
    >
      {label && (
        <FormLabel mb="0" mr="0" flexShrink={0}>
          {label}{' '}
          {moreInfoTooltip && (
            <MoreInfoTooltip>{moreInfoTooltip}</MoreInfoTooltip>
          )}
        </FormLabel>
      )}
      <HStack spacing="0">
        <Select
          items={data?.items}
          selectedItem={defaultValue}
          onSelect={onChange}
          placeholder={placeholder}
          onInputChange={(value) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => setSearch(value), 500)
          }}
        />
        {withVariableButton ? (
          <VariablesButton
            onSelectVariable={(variable) => {
              onChange(`{{${variable.name}}}`)
            }}
          />
        ) : null}
      </HStack>
      {helperText && <FormHelperText mt="0">{helperText}</FormHelperText>}
    </FormControl>
  )
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  if (!obj) return {} as Pick<T, K>
  const ret: any = {}
  keys.forEach((key) => {
    ret[key] = obj[key]
  })
  return ret
}
