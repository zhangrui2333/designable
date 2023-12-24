import { ISchema } from '@formily/react';

export const AutoComplete: ISchema = {
  type: 'object',
  properties: {
    access: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    code: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    initApi: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
    allowClear: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    dropdownMatchSelectWidth: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    defaultActiveFirstOption: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    defaultOpen: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    // labelInValue: {
    //   type: "boolean",
    //   "x-decorator": "FormItem",
    //   "x-component": "Switch",
    // },
    filterOption: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['BOOLEAN', 'EXPRESSION'],
      },
    },
    notFoundContent: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'Not Found',
      },
    },
    placeholder: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    size: {
      type: 'string',
      enum: ['large', 'small', 'middle' ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'middle',
      },
    },
    placement: {
      type: 'string',
      enum: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'bottomLeft',
      },
    },
  },
};
