import { Engine, ITreeNode } from '@edan/designable-core'
import {
  transformToSchema,
  transformToTreeNode
} from '@edan/designable-formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  const currentTree: ITreeNode = designer.getCurrentTree() as ITreeNode
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(currentTree))
  )
  message.success('保存成功')
}

export const getSchema = (designer: Engine): string => {
  const currentTree: ITreeNode = designer.getCurrentTree() as ITreeNode
  return JSON.stringify(transformToSchema(currentTree))
}

export const loadInitialSchema = (designer: Engine, initialSchema: string) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(JSON.parse(initialSchema) || {}))
    )
  } catch {}
}
