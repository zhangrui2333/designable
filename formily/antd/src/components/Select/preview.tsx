import React from 'react'
import { Select as FormilySelect } from '@formily/antd'
import { createBehavior, createResource } from '@edan-cli/designable-core'
import { DnFC } from '@edan-cli/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Select: DnFC<React.ComponentProps<typeof FormilySelect>> =
  FormilySelect

Select.Behavior = createBehavior({
  name: 'Select',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Select',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Select),
  },
  designerLocales: AllLocales.Select,
})

Select.Resource = createResource('Inputs', {
  icon: 'SelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Select',
        'x-decorator': 'FormItem',
        'x-component': 'Select',
        'x-component-props': {
          access: true,
          filterOption: `{{(input,option) => {\n    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;\n}}}`,
          // filterOption: "{{filterOption}}",
        },
      },
    },
  ],
})
