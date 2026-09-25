import imageCompression from 'browser-image-compression'
import { backgroundImageMaxSizeMB } from '@typebot.io/schemas/features/typebot/theme/constants'

export const compressFile = async (file: File) => {
  const options = {
    maxSizeMB: backgroundImageMaxSizeMB,
    maxWidthOrHeight: 1600,
  }
  return ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)
    ? imageCompression(file, options)
    : file
}
