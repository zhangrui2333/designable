import React from 'react'
import { Rate as AntdRate } from 'antd'
import { createBehavior, createResource } from '@edan-kit/designable-core'
import { DnFC } from '@edan-kit/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Rate: DnFC<React.ComponentProps<typeof AntdRate>> = AntdRate

Rate.Behavior = createBehavior({
  name: 'Rate',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Rate',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Rate),
  },
  designerLocales: AllLocales.Rate,
})

Rate.Resource = createResource('Inputs', {
  icon: 'RateSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'Rate',
        'x-decorator': 'FormItem',
        'x-component': 'Rate',
      },
    },
  ],
})
