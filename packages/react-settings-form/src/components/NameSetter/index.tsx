import React, { useContext } from 'react'
import { usePrefix } from '@edan/designable-react'
import { observer } from '@formily/react'
import { SettingsFormContext } from '../../shared/context'
import { Select } from 'antd'
import cls from 'classnames'
import './styles.less'

export interface INameSetterProps {
  style?: React.CSSProperties
  className?: string
  value: any
  onChange: (value: any) => void
  exclude?: string[]
  include?: string[]
}
const isValid = (val: any) => val !== undefined && val !== null
const getEventValue = (event: any) => {
  if (event?.target) {
    if (isValid(event.target.value)) return event.target.value
    if (isValid(event.target.checked)) return event.target.checked
    return
  }
  return event
}

export const NameSetter: React.FC<INameSetterProps> = observer((props) => {
  const { className, style, value, onChange, ...rest } = props
  const context = useContext(SettingsFormContext)
  const prefix = usePrefix('name-setter')
  const options  = (context?.options?.tableColumnList || []).map((item:any)=>({label:item, value:item}))

  return (
    <div className={cls(prefix, className)} style={style} >
      {React.createElement(Select, {
        ...rest,
        value: value,
        options: options,
        onChange: (event: any) => {
          const value = getEventValue(event)
          onChange?.(value)
        },
      })}
    </div>
  )
})
