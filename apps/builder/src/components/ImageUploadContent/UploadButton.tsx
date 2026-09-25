import { useToast } from '@/hooks/useToast'
import { Button, ButtonProps, chakra } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useId, useRef, useState } from 'react'
import { FilePathUploadProps } from '@/features/upload/api/generateUploadUrl'
import { trpc } from '@/lib/trpc'
import { compressFile } from '@/helpers/compressFile'
import { createId } from '@paralleldrive/cuid2'
import {
  backgroundImageMaxSizeMB,
  backgroundImageMimeTypes,
  isBackgroundImageFileName,
} from '@typebot.io/schemas/features/typebot/theme/constants'

type UploadButtonProps = {
  fileType: 'image' | 'audio' | string
  filePathProps: FilePathUploadProps
  onFileUploaded: (url: string, name?: string) => void
} & ButtonProps

export const UploadButton = ({
  fileType,
  filePathProps,
  onFileUploaded,
  ...props
}: UploadButtonProps) => {
  const [isUploading, setIsUploading] = useState(false)
  const { showToast } = useToast()
  const inputId = useId()
  const uploadController = useRef<AbortController>()
  const onFileUploadedRef = useRef(onFileUploaded)
  onFileUploadedRef.current = onFileUploaded
  const isBackground =
    'fileName' in filePathProps &&
    isBackgroundImageFileName(filePathProps.fileName)
  const { mutateAsync } = trpc.generateUploadUrl.useMutation()

  useEffect(() => () => uploadController.current?.abort(), [])

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    e.target.value = ''
    if (!selectedFile || isUploading) return
    setIsUploading(true)
    const controller = new AbortController()
    uploadController.current = controller
    try {
      if (
        isBackground &&
        (!selectedFile.size ||
          !backgroundImageMimeTypes.includes(selectedFile.type))
      )
        throw new Error('Selecione uma imagem JPEG ou PNG válida.')
      const file = await compressFile(selectedFile)
      if (isBackground && file.size > backgroundImageMaxSizeMB * 1024 * 1024)
        throw new Error(
          `A imagem deve ter no máximo ${backgroundImageMaxSizeMB} MB após a compressão.`
        )
      if (controller.signal.aborted) return
      const data = await mutateAsync({
        filePathProps:
          isBackground && 'fileName' in filePathProps
            ? {
                ...filePathProps,
                fileName: `${filePathProps.fileName}-${createId()}`,
              }
            : filePathProps,
        fileType: file.type,
      })
      if (controller.signal.aborted) return
      const formData = new FormData()
      Object.entries(data.formData).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('file', file)
      const upload = await fetch(data.presignedUrl, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      })

      if (!upload.ok) {
        throw new Error('Error while trying to upload the file.')
      }

      if (!controller.signal.aborted)
        onFileUploadedRef.current(data.fileUrl + '?v=' + Date.now(), file.name)
    } catch (error) {
      if (!controller.signal.aborted)
        showToast({
          description:
            error instanceof Error
              ? error.message
              : 'Error while trying to upload the file.',
        })
    } finally {
      if (!controller.signal.aborted) setIsUploading(false)
    }
  }

  return (
    <>
      <chakra.input
        data-testid="file-upload-input"
        type="file"
        id={inputId}
        display="none"
        onChange={handleInputChange}
        accept={
          isBackground ? backgroundImageMimeTypes.join(',') : fileType + '/*'
        }
        disabled={isUploading}
      />
      <Button
        as="label"
        size="sm"
        htmlFor={inputId}
        cursor="pointer"
        isLoading={isUploading}
        {...props}
      >
        {props.children}
      </Button>
    </>
  )
}
