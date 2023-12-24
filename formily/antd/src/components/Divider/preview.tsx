import { createBehavior, createResource } from '@edan-kit/designable-core';
import { DnFC } from '@edan-kit/designable-react';
import React from 'react';
// import { createVoidFieldSchema } from "../Field";
import { Divider as AntdDivider } from 'antd';
import { AllLocales } from '../../locales';
import { AllSchemas } from '../../schemas';
import { createFieldSchema } from '../Field';
import './styles.less';

export const CustomDivider = (props: any) => {
  return (
    <AntdDivider className="custom-divider" orientationMargin="0" {...props}>
      {props.title && <span data-content-editable="x-component-props.title">{props.title}</span>}
    </AntdDivider>
  );
};

export const Divider: DnFC<React.ComponentProps<typeof AntdDivider>> = CustomDivider;

Divider.Behavior = createBehavior({
  name: 'Divider',
  extends: ['Field'],
  selector: (node: any) => node.props['x-component'] === 'Divider',
  designerProps: {
    droppable: true,
    propsSchema: createFieldSchema(AllSchemas.Divider),
  },
  designerLocales: AllLocales.Divider,
});

Divider.Resource = createResource('Layouts', {
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Divider',
        'x-component-props': {
          title: 'Divider',
          style: {
            color: '#f37e87',
            borderTopWidth: '4px',
            borderColor: '#f37e87',
          },
          orientation: 'left',
        },
      },
    },
  ],
});
