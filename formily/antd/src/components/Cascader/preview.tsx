import React from 'react'
import { Cascader as FormilyCascader } from '@formily/antd'
import { createBehavior, createResource } from '@edan/designable-core'
import { DnFC } from '@edan/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Cascader: DnFC<React.ComponentProps<typeof FormilyCascader>> =
  FormilyCascader

Cascader.Behavior = createBehavior({
  name: 'Cascader',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Cascader',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Cascader),
  },
  designerLocales: AllLocales.Cascader,
})

Cascader.Resource = createResource('Inputs', {
  icon: 'CascaderSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Cascader',
        'x-decorator': 'FormItem',
        'x-component': 'Cascader',
      },
    },
  ],
})
