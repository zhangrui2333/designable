import React, { useCallback } from 'react';
import { DnFC } from '@edan-cli/designable-react';
import { Button as AntdButton } from 'antd';
import { observer, useField } from '@formily/react';
import { throttle } from 'lodash';
import { eventBus } from '../../utils';
import { createBehavior, createResource } from '@edan-cli/designable-core';
import { AllLocales } from '../../locales';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';

export const CustomButton: DnFC<React.ComponentProps<any>> = observer((props) => {
  const field = useField();
  const handleClickThrottle = useCallback(throttle((data: any) => {
    if(!field.designable) eventBus.emit('Page', { type: 'buttonClickEvent', data});
  }, 2000, { trailing: false }), []);

  return (
    <AntdButton
      {...props}
      disabled={props.type === 'disabled'}
      onClick={() => handleClickThrottle(props.clickEvent)}
    ></AntdButton>
  );
});

export const Button: DnFC<React.ComponentProps<any>> = CustomButton;

const propsSchema = createVoidFieldSchema(AllSchemas.Button) as any;

const customStyles = {};
const styleSchema =
  propsSchema.properties['component-style-group'].properties['x-component-props.style'].properties;
Object.entries(customStyles).forEach((values) => (styleSchema[`style.${values[0]}`] = values[1]));

Button.Behavior = createBehavior({
  name: 'Button',
  extends: ['Field'],
  selector: (node: any) => node.props['x-component'] === 'Button',
  designerProps: {
    propsSchema,
    defaultProps: {},
  },
  designerLocales: AllLocales.Button,
});

Button.Resource = createResource('Inputs', {
  icon: 'ButtonSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        title: 'Button',
        'x-component': 'Button',
      },
    },
  ],
});
