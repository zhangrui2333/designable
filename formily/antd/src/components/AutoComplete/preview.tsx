import { createBehavior, createResource } from '@edan-cli/designable-core'
import { DnFC } from '@edan-cli/designable-react'
import { Field, useField } from '@formily/react'
import { AutoComplete as AntdAutoComplete } from 'antd'
import React from 'react'
import { AllLocales } from '../../locales'
import { AllSchemas } from '../../schemas'
import { createFieldSchema } from '../Field'

export const CustomAutoComplete: DnFC<React.ComponentProps<any>> = (props) => {
  const field: any = useField()
  return (
    <Field
      name={field?.props.name}
      component={[
        (componentProps) => {
          // console.log(componentProps, field)
          return (
            <AntdAutoComplete
              {...componentProps}
              options={field?.dataSource || []}
            />
          )
        },
        { ...props },
      ]}
    />
  )
}

export const AutoComplete: DnFC<
  React.ComponentProps<typeof CustomAutoComplete>
> = CustomAutoComplete

AutoComplete.Behavior = createBehavior({
  name: 'AutoComplete',
  extends: ['Field'],
  selector: (node: any) => node.props['x-component'] === 'AutoComplete',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.AutoComplete),
  },
  designerLocales: AllLocales.AutoComplete,
})

AutoComplete.Resource = createResource('Inputs', {
  icon: 'SelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '自动完成',
        'x-decorator': 'FormItem',
        'x-component': 'AutoComplete',
        'x-component-props': {
          // filterOption: `{{(input,option) => {\n    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;\n}}}`,
          // filterOption: "{{filterOption}}",
        },
      },
    },
  ],
})
