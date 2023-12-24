import { ISchema } from '@formily/react';

export const Divider: ISchema & { Addition?: ISchema } = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    orientation: {
      type: 'string',
      enum: ['left', 'right', 'center'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'left',
      },
    },
    dashed: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultValue: false,
      },
    },
    type: {
      type: 'string',
      enum: ['horizontal', 'vertical'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'horizontal',
      },
    },
  },
};
