/*
 * 支持文本、数字、布尔、表达式
 * Todo: JSON、富文本，公式
 */
import React, { FC, memo, useContext } from 'react'
import { createPolyInput } from '../PolyInput'
import { Input, Button, Popover, InputNumber, Select, TreeSelect } from 'antd'
import { MonacoInput } from '../MonacoInput'
import { TextWidget } from '@edan-cli/designable-react'
import { SettingsFormContext } from '../../shared/context'

const STARTTAG_REX =
  /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/

const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/

const CODE_REX = /^\$\{([^}]+)\}$/

const isNumber = (value: any) => typeof value === 'number'

const isBoolean = (value: any) => typeof value === 'boolean'

const isExpression = (value: any) => {
  return typeof value === 'string' && EXPRESSION_REX.test(value)
}

const isRichText = (value: any) => {
  return typeof value === 'string' && STARTTAG_REX.test(value)
}

const isNormalCode = (value: any) => {
  return typeof value === 'string' && CODE_REX.test(value)
}

const isNormalText = (value: any) => {
  return typeof value === 'string' && !isExpression(value) && !isRichText(value) && !isNormalCode(value)
}

const takeNumber = (value: any) => {
  const num = String(value).replace(/[^\-?\d\.]+/, '')
  if (num === '') return
  return Number(num)
}

const SelectCode:FC = memo((props: any) => {
  const context = useContext(SettingsFormContext)
  const dataCodeMap = context?.options?.dataCodeMap || {}
  const treeData = Object.keys(dataCodeMap).map((code: string) => {
    const children = (dataCodeMap[code] || []).map((column: string) => ({
      title: column,
      value: "${"+`${code}-${column}`+"}",
    }))
    return {
      title: code,
      value: code,
      selectable: false,
      children: children,
    }
  })
  return  ( 
    <TreeSelect
      {...props}
      showSearch
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400 }}
      placeholder=""
      placement={'bottomRight'}
      dropdownMatchSelectWidth={false}
      treeData={treeData}
    />
  )
})

export const ValueInput = createPolyInput([
  {
    type: 'CODE',
    icon: 'Code',
    component: SelectCode,
    checker: isNormalCode,
    toInputValue: (value) => {
      return value
    },
    toChangeValue: (value) => {
      return value
    },
  },
  {
    type: 'TEXT',
    icon: 'Text',
    component: Input,
    checker: isNormalText,
  },
  {
    type: 'EXPRESSION',
    icon: 'Expression',
    component: (props: any) => {
      return (
        <Popover
          content={
            <div
              style={{
                width: 400,
                height: 200,
                marginLeft: -16,
                marginRight: -16,
                marginBottom: -12,
              }}
            >
              <MonacoInput {...props} language="javascript.expression" />
            </div>
          }
          trigger="click"
        >
          <Button block>
            <TextWidget token="SettingComponents.ValueInput.expression" />
          </Button>
        </Popover>
      )
    },
    checker: isExpression,
    toInputValue: (value) => {
      if (!value || value === '{{}}') return
      const matched = String(value).match(EXPRESSION_REX)
      return matched?.[1] || value || ''
    },
    toChangeValue: (value) => {
      if (!value || value === '{{}}') return
      const matched = String(value).match(EXPRESSION_REX)
      return `{{${matched?.[1] || value || ''}}}`
    },
  },
  {
    type: 'BOOLEAN',
    icon: 'Boolean',
    component: (props: any) => (
      <Select
        {...props}
        options={[
          { label: 'True', value: true },
          { label: 'False', value: false },
        ]}
      />
    ),
    checker: isBoolean,
    toInputValue: (value) => {
      return !!value
    },
    toChangeValue: (value) => {
      return !!value
    },
  },
  {
    type: 'NUMBER',
    icon: 'Number',
    component: InputNumber,
    checker: isNumber,
    toInputValue: takeNumber,
    toChangeValue: takeNumber,
  },
])
