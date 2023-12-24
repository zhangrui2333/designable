import { FormDataItem } from '../types'
import * as crypto from 'crypto'
/**
 * desc: 格式化数据
 * @param json 表单json
 * @returns FormDataItem[]
 */
export const filterData = (json: string) => {
  if (!json) return json
  let data = JSON.parse(json)
  const filtersComponent = ['Table', 'ArrayTable', 'Modal']
  const accessComponent = [
    'Upload',
    'Input',
    'Input.TextArea',
    'Password',
    'NumberPicker',
    'Rate',
    'Slider',
    'Select',
    'TreeSelect',
    'Cascader',
    'Transfer',
    'Switch',
    'Upload.Dragger',
    'DatePicker.RangePicker',
    'TimePicker.RangePicker',
    'TimePicker',
    'Checkbox.Group',
    'DatePicker',
    'Radio.Group',
    'Signature'
  ]
  const traverse = (obj: any) => {
    !!obj &&
      Object.values(obj).forEach((value) => {
        if (
          typeof value === 'object' &&
          value !== null &&
          !filtersComponent.includes(value['x-component'])
        ) {
          if (
            value['x-decorator'] === 'FormItem' &&
            accessComponent.includes(value['x-component'])
          ) {
            if (value['enum'] && value['enum'].length > 0) {
              value['enum'] = value['enum'].map((item: any) => {
                if (typeof item.value === 'number') {
                  return { ...item, value: item.value.toString() }
                } else {
                  return item
                }
              })
            }
          }
          /* 格式化下拉框搜索值类型 */
          // if (
          //   value["x-decorator"] === "FormItem" &&
          //   "Select" === value["x-component"] &&
          //   isEmpty(value["x-component-props"]["filterOption"])
          // ) {
          //   value["x-component-props"][
          //     "filterOption"
          //   ] = `{{(input,option) => {\n    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;\n}}}`;
          // }

          // if (
          //   value["x-decorator"] === "FormItem" &&
          //   "Select" === value["x-component"]
          // ) {
          //   value["x-component-props"]["labelInValue"] = false;
          // }
          if (
            value['x-decorator'] === 'FormItem' &&
            value['x-component'] == 'Signature'
          ) {
            value['type'] = 'string'
            value['x-component-props']['style'] = {
              width: '100px',
              height: '32px'
            }
          }
          traverse(value)
        }
      })
  }
  traverse(data)
  return JSON.stringify(data)
}

/**
 * desc: 获取json中表单元素对象
 * @param json 表单json
 * @returns FormDataItem[]
 */
export const getFilterData = (json: any) => {
  if (!json) return {}
  let result: FormDataItem[] = []
  let empty: FormDataItem[] = []
  let fields: { [key: string]: boolean } = {}
  let multiple: FormDataItem[] = []
  let data = JSON.parse(json)
  const filtersComponent = ['Table', 'ArrayTable', 'Modal']
  const traverse = (obj: any) => {
    Object.values(obj).forEach((value) => {
      if (
        typeof value === 'object' &&
        value !== null &&
        !filtersComponent.includes(value['x-component'])
      ) {
        if (value['x-decorator'] === 'FormItem') {
          let item = {
            label: value['title'],
            type: value['x-component'],
            designableId: value['x-designable-id'],
            prop: value['name']
          }
          /* 缺少字段统计 */
          if (!value['name']) {
            empty.push(item)
          }
          /* 入库字段统计 */
          if (value['x-component-props']['access']) {
            result.push(item)
          }
          /* 重复字段统计 */
          if (fields[value['name']]) {
            multiple.push(item)
          } else {
            fields[value['name']] = true
          }
        }
        traverse(value)
      }
    })
  }
  traverse(data)
  return {
    result,
    empty,
    multiple
  }
}

export const lowerSnake = (str: string) => {
  return String(str).replace(/\s+/g, '_').toLocaleLowerCase()
}

export const convertToInt = (value: any): number => {
  const intValue = Number.parseInt(value)
  return Number.isNaN(intValue) ? 0 : intValue
}

export const parseParams = (url: string) => {
  const params = {}
  const queryString = url.split('?')[1]
  if (queryString) {
    const paramPairs = queryString.split('&')
    paramPairs.forEach((pair) => {
      const [key, value] = pair.split('=')
      params[key] = decodeURIComponent(value)
    })
  }
  return params
}

export const parseUrl = (url: string) => {
  // 使用URL类来解析url
  const parsedUrl = new URL(url, 'https://example.com')
  // href
  let origin =
    parsedUrl.origin === 'https://example.com' ? '' : parsedUrl.origin
  // 获取api部分
  const api = parsedUrl.pathname
  // 获取params部分
  const query = Object.fromEntries(parsedUrl.searchParams)
  // 组合成一个对象
  return { origin, api, query }
}

//json转字符串a=1
export const jsonToUrlParam = (json) => {
  return new URLSearchParams(json).toString()
}

export const parseJson2Urlparam = (data) => {
  try {
    let tempArr: (null | string)[] = []
    for (let i in data) {
      let key = encodeURIComponent(i)
      let value = encodeURIComponent(data[i])
      const joinKeyValue: string = key + '=' + value
      tempArr.push(joinKeyValue)
    }
    let urlParamsStr = tempArr.join('&')
    return urlParamsStr
  } catch (err) {
    return ''
  }
}

export const ltrim = (str: string, key = ' ') => {
  return !str.startsWith(key) ? str : str.slice(key.length)
}

export const rtrim = (str: string, key = ' ') => {
  return !str.endsWith(key) ? str : str.slice(0, str.length - key.length)
}

export const trim = (str: string, key = ' ') => {
  return rtrim(ltrim(str, key), key)
}

export const md5 = (s) => {
  return crypto.createHash('md5').update(String(s)).digest('hex')
}

export const salt = () => {
  let salt = crypto.randomBytes(10).toString('base64')
  return salt
}
export const unixtime13 = (d = new Date()): number => {
  return d.valueOf()
}
export const unixtime10 = (d = new Date()): string => {
  let utime: string | number = d.valueOf()
  utime = utime.toString().substring(0, 10)
  return utime
}
