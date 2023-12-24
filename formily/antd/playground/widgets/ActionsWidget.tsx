import React, { useEffect } from 'react'
import { Space, Button, Radio, Modal } from 'antd'
import { ExclamationCircleOutlined, GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@edan/designable-react'
import { GlobalRegistry } from '@edan/designable-core'
import { observer } from '@formily/react'
import { loadInitialSchema, getSchema } from '../service'
import logo from '../assets/images/logo.svg';

interface ActionsWidgetProps {
  setVisible: (flag:boolean) => void,
  handleClose: () => void,
  handleSave: (scheme:string) => void
}

export const ActionsWidget = observer((props: ActionsWidgetProps) => {
  const designer = useDesigner()
  useEffect(() => {
    loadInitialSchema(designer)
  }, [])
  const supportLocales = ['zh-cn', 'en-us', 'ko-kr']
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn')
    }
  }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Button href="https://designable-fusion.formilyjs.org">
        zhangrui2333 Fusion
      </Button>
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
          { label: '한국어', value: 'ko-kr' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      /> */}
      {/* <Button href="https://github.com/zhangrui2333/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button> */}
      
      {/* <Button
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button> */}
      <Button
        onClick={() =>
          Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确认退出当前页面？',
            onOk() {
              props?.setVisible(false);
              props?.handleClose();
            },
          })
        }
      >
        <TextWidget>取消</TextWidget>
      </Button>
      <Button type="primary" onClick={() => props.handleSave(getSchema(designer))}>
        <TextWidget>保存</TextWidget>
      </Button>
    </Space>
  )
})
