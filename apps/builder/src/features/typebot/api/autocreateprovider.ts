import prisma from '@typebot.io/lib/prisma'
import { encrypt } from '@typebot.io/lib/api/encryption/encrypt'
import { decrypt } from '@typebot.io/lib/api/encryption/decrypt'
import { createInstantVariables } from '@/features/typebot/api/autocreatevariables'

interface Credentials {
  baseUrl: string
  accountcode: string
  wsKey?: string
  cortexUrl?: string
  cortexAccountID?: string
  cortexToken?: string
  kwikToken?: string
}

interface ProviderInput {
  data: Credentials
  type: string
  workspaceId: string
  name: string
}

const compareTokens = function (cc: Credentials, nc: Credentials) {
  // We don't want to update if the token changed, only if it didn't exist and now we have one.

  if (nc.cortexToken != null && cc.cortexToken == null) {
    return true
  }

  if (nc.kwikToken != null && cc.kwikToken == null) {
    return true
  }
  return false
}

const credentialsAreDifferent = function (cc: Credentials, nc: Credentials) {
  return (
    cc.baseUrl != nc.baseUrl ||
    cc.accountcode != nc.accountcode ||
    cc.wsKey != nc.wsKey ||
    cc.cortexUrl != nc.cortexUrl ||
    cc.cortexAccountID != nc.cortexAccountID
  )
}

const compareCredentials = function (
  currentCredentials: Credentials,
  newCredentials: Credentials
) {
  return (
    credentialsAreDifferent(currentCredentials, newCredentials) ||
    compareTokens(currentCredentials, newCredentials)
  )
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createCredential = async (input: ProviderInput) => {
  const { encryptedData, iv } = await encrypt(input.data)
  try {
    const listInstantCredentials = await prisma.credentials.findFirst({
      where: {
        workspaceId: input.workspaceId,
        type: input.type,
      },
    })
    if (listInstantCredentials) {
      const data = (await decrypt(
        listInstantCredentials.data,
        listInstantCredentials.iv
      )) as Credentials

      if (compareCredentials(data, input.data)) {
        const updatedCredentials = await prisma.credentials.update({
          where: {
            id: listInstantCredentials.id,
          },
          data: {
            ...input,
            data: encryptedData,
            iv,
          },
          select: {
            id: true,
          },
        })
        return updatedCredentials
      }
      return false
    }
  } catch (e) {
    console.log('Error in finding credentials', e)
  }

  const createdCredentials = await prisma.credentials.create({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data: {
      ...input,
      data: encryptedData,
      iv,
    },
    select: {
      id: true,
    },
  })

  return createdCredentials
}

export const createInstantProviderCredentials = async (
  userEmail: string,
  workspaceId: string
) => {
  let is_variables: { id: string; name: string }[] = []
  if (userEmail !== null && workspaceId !== null) {
    const [host, acc] = userEmail.split('@')
    const accountcode = acc.split('.')[0]
    const baseUrl = 'https://' + host
    const url = `${baseUrl}/ivci/webhook/accountcode_info/${accountcode}`
    const response = await fetch(url, { method: 'GET' })
    if (response.status < 300 && response.status >= 200) {
      const { wsKey, cortexAccountID, cortexUrl, cortexToken, kwikToken } =
        await response.json()
      const data = {
        baseUrl,
        accountcode,
        wsKey,
        cortexUrl,
        cortexAccountID,
        cortexToken,
        kwikToken,
      }
      createCredential({
        data,
        type: 'instantchat',
        workspaceId: workspaceId,
        name: 'Instant All-In-One',
      })
      is_variables = await createInstantVariables(data)
    } else {
      createCredential({
        data: {
          baseUrl,
          accountcode,
        },
        type: 'instantchat',
        workspaceId: workspaceId,
        name: 'Instant All-In-One',
      })
    }
  }
  return is_variables
}
