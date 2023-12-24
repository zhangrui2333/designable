import React from 'react'
import { Form } from '@formily/core'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  uploadAction?: string
  options?: OptionsType
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
}

type OptionsType = {
  tableColumnList: string[];
  dataCodeMap: Record<string, (string | null)[]>;
}
