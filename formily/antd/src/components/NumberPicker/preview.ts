import React from 'react'
import { NumberPicker as FormilyNumberPicker } from '@formily/antd'
import { createBehavior, createResource } from '@edan-kit/designable-core'
import { DnFC } from '@edan-kit/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const NumberPicker: DnFC<
  React.ComponentProps<typeof FormilyNumberPicker>
> = FormilyNumberPicker

NumberPicker.Behavior = createBehavior({
  name: 'NumberPicker',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'NumberPicker',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.NumberPicker),
  },
  designerLocales: AllLocales.NumberPicker,
})

NumberPicker.Resource = createResource('Inputs', {
  icon: 'NumberPickerSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'NumberPicker',
        'x-decorator': 'FormItem',
        'x-component': 'NumberPicker',
      },
    },
  ],
})
