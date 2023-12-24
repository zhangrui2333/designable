import { ISchema } from '@formily/react';

export const Button: ISchema & { Addition?: ISchema } = {
  type: 'object',
  properties: {
    children: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      default: '按钮',
    },
    // primary | ghost | dashed | link | text | default
    type: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: 'default',
          value: 'default',
        },
        {
          label: 'primary',
          value: 'primary',
        },
        {
          label: 'ghost',
          value: 'ghost',
        },
        {
          label: 'dashed',
          value: 'dashed',
        },
        {
          label: 'danger',
          value: 'danger',
        },
        {
          label: 'link',
          value: 'link',
        },
        {
          label: 'text',
          value: 'text',
        },
      ],
      default: 'default',
    },
    size: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: 'medium',
          value: 'medium',
        },
        {
          label: 'large',
          value: 'large',
        },
        {
          label: 'small',
          value: 'small',
        },
        {
          label: 'mini',
          value: 'mini',
        },
      ],
      default: 'medium',
    },
    shape: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: 'square',
          value: 'square',
        },
        {
          label: 'circle',
          value: 'circle',
        },
        {
          label: 'round',
          value: 'round',
        },
      ],
      default: 'square',
    },
    block: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },

    clickEvent: {
      type: 'object',
      'x-component': 'DrawerSetter',
      'x-decorator': 'FormItem',
      properties: {
        api: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          enum: [
            { label: '保存', value: 'submit' },
            { label: '调用接口', value: 'api' },
            { label: '跳转', value: 'href' },
            // { label: "打印", value: "print" },
            { label: '返回', value: 'back' },
            // { label: "formily表单修改values", value: "$form.setValues" },
          ],

          // default: "submit",
        },
        method: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          enum: [
            { label: 'post', value: 'POST' },
            { label: 'get', value: 'GET' },
            { label: 'pull', value: 'PULL' },
            // { label: "返回", value: "back" },
            // { label: "formily表单修改values", value: "$form.setValues" },
          ],
          default: 'POST',
        },
        path: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        action: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'ValueInput',
          'x-component-props': { include: ['EXPRESSION'] },
        },
        onCancel: {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
          'x-reactions': {
            dependencies: ['.api'],
            fulfill: {
              schema: {
                'x-visible': "{{$deps[0] === 'submit'}}",
              },
            },
          },
        },
      },
    },
    // hairline: {
    //   type: 'boolean',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Switch',
    // },
    // TODO: 自定义icon
    // icon: {
    //   type: 'object',
    //   'x-component': 'DrawerSetter',
    //   'x-decorator': 'FormItem',
    //   properties: {
    //     useIcon: {
    //       type: 'boolean',
    //       'x-decorator': 'FormItem',
    //       'x-component': 'Switch',
    //     },
    //     icon: IconSelect,
    //     inline: {
    //       type: 'string',
    //       'x-decorator': 'FormItem',
    //       'x-component': 'Select',
    //       enum: [
    //         {
    //           label: 'none',
    //           value: 'none',
    //         },
    //         {
    //           label: 'left',
    //           value: 'left',
    //         },
    //         {
    //           label: 'right',
    //           value: 'right',
    //         },
    //       ],
    //     },
    //     src: {
    //       type: 'string',
    //       'x-decorator': 'FormItem',
    //       'x-component': 'Input',
    //       default: 'https://img.yzcdn.cn/vant/user-active.png',
    //     },
    //     width: {
    //       type: 'string',
    //       'x-decorator': 'FormItem',
    //       'x-component': 'SizeInput',
    //       default: '25px',
    //     },
    //     height: {
    //       type: 'string',
    //       'x-decorator': 'FormItem',
    //       'x-component': 'SizeInput',
    //       default: '20px',
    //     },
    //     // ...ImageModeSelect.properties,
    //   },
    // },
  },
};
