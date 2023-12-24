import { createBehavior, createResource } from '@edan-cli/designable-core';
import { DnFC } from '@edan-cli/designable-react';
import { Field, connect, mapProps, useField } from '@formily/react';
import { Radio as AntdRadio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import React from 'react';
import { AllLocales } from '../../locales';
import { AllSchemas } from '../../schemas';
import { createFieldSchema } from '../Field';

type ComposedRadio = DnFC<React.ComponentProps<any>> & {
  Group?: React.FC;
  __ANT_RADIO?: boolean;
};

export const CustomRadio: ComposedRadio = connect(
  AntdRadio,
  mapProps({
    value: 'checked',
  }),
);

CustomRadio.__ANT_RADIO = true;

CustomRadio.Group = (props: any) => {
  const field: any = useField();
  return (
    <Field
      name={field?.props.name}
      component={[
        (componentProps) => {
          const { ...rest } = componentProps;
          const handleOnClick = (value: any) => {
            if (field?.value === value) {
              field?.form?.setValuesIn([field?.props?.name], '');
            }
          };
          const handleOnChange = (e: RadioChangeEvent) => {
            rest.onChange(e?.target?.value);
          };
          return (
            <AntdRadio.Group {...rest} value={field?.value} onChange={handleOnChange}>
              {field?.dataSource?.map((item: any, index: number) => (
                <AntdRadio
                  key={`${field.props.name}-${index}`}
                  value={item?.value}
                  onClick={() => handleOnClick(item?.value)}
                >
                  {item?.label}
                </AntdRadio>
              ))}
            </AntdRadio.Group>
          );
        },
        { ...props },
      ]}
    />
  );
};

export const Radio: DnFC<React.ComponentProps<typeof CustomRadio>> = CustomRadio;

Radio.Behavior = createBehavior({
  name: 'Radio.Group',
  extends: ['Field'],
  selector: (node: any) => node.props['x-component'] === 'Radio.Group',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Radio.Group),
  },
  designerLocales: AllLocales.RadioGroup,
});

Radio.Resource = createResource('Inputs', {
  icon: 'RadioGroupSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string | number',
        title: 'Radio Group',
        'x-decorator': 'FormItem',
        'x-component': 'Radio.Group',
        enum: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ],
        'x-component-props': {
          access: true,
        },
      },
    },
  ],
});
