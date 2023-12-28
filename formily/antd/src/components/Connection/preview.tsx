import React from 'react'
import { createBehavior, createResource } from '@edan-cli/designable-core'
import { DnFC } from '@edan-cli/designable-react'
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

export interface IDesignableConnectionProps {
  value?: string
  code?: string
  style?: React.CSSProperties
  className?: string
  content?: string
}

export const CustomConnection: React.FC<{children?: any}> = (props) => {
  return <div {...props}>{props.children}</div>
}

export const Connection: DnFC<IDesignableConnectionProps> = (props) => {
  return React.createElement(
    'div',
    {
      ...props,
      className: cls(props.className, 'dn-connection'),
      'data-content-editable': 'x-component-props.content',
    },
    props.content
  )
}

Connection.Behavior = createBehavior({
  name: 'Connection',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Connection',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Connection),
  },
  designerLocales: AllLocales.Connection,
})

Connection.Resource = createResource('Displays', {
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'object',
        'x-component': 'Connection',
      },
    },
  ],
})
