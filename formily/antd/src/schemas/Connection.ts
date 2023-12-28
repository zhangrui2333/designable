import { ISchema } from '@formily/react'

export const Connection: ISchema = {
  type: 'object',
  properties: {
    formCode: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
