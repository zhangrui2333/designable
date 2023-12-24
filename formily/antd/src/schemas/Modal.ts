import { ISchema } from '@formily/react';

export const Modal: ISchema & { Addition?: ISchema } = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    extra: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    modalInitApi: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: '',
      },
    },
    width: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['TEXT', 'NUMBER'],
        defaultValue: '70%',
      },
    },
    modalSaveApi: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: '',
      },
    },
    modalPrefix: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'row|',
      },
    },
    openFunc: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
        defaultValue: `(row)=>{
          // alert(row)
          console.log('modal openFunc', row)
        }`,
      },
    },
    okText: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: '确认',
      },
    },
    confirm: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
        defaultValue: `(row)=>{
          // alert('modal confirm', row)
          console.log('modal confirm', row)
        }`,
      },
    },
    cancelText: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: '取消',
      },
    },
    cancelFun: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
        defaultValue: `(row)=>{
          console.log('modal cancelFun', row)
        }`,
      },
    },
  },
};
