import React, { useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  HistoryWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewPanel,
  SettingsPanel,
  ComponentTreeWidget,
  ResourceListWidget,
} from '@edan/designable-react'
import {
  SettingsForm,
  setNpmCDNRegistry,
} from '@edan/designable-react-settings-form'
import {
  createDesigner,
  GlobalRegistry,
  Shortcut,
  KeyCode,
} from '@edan/designable-core'
import {
  LogoWidget,
  ActionsWidget,
  PreviewWidget,
  SchemaEditorWidget,
  MarkupSchemaWidget,
} from './widgets'
import { saveSchema } from './service'
import { sources } from '@edan/designable-formily-antd'
import { Alert } from 'antd'
import '../src/styles/theme.less'
setNpmCDNRegistry('//cdn.jsdelivr.net/npm')
const { ErrorBoundary } = Alert
GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
      Displays: '展示组件',
    },
  },
})

const App = (props: any) => {
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: 'Form',
      }),
    []
  )

  useEffect(() => {
    GlobalRegistry.setDesignerLanguage('zh-CN')
  }, [])

  return (
    <Designer engine={engine}>
      <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget {...props} />}>
        <CompositePanel>
          <CompositePanel.Item title="panels.Component" icon="Component">
            <ResourceListWidget sources={Object.values({ ...sources })} />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
            <OutlineTreeWidget />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.History" icon="History">
            <HistoryWidget />
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ErrorBoundary>
              <ToolbarPanel>
                <DesignerToolsWidget />
                <ViewToolsWidget
                  use={['DESIGNABLE', 'JSONTREE', 'MARKUP', 'PREVIEW']}
                />
              </ToolbarPanel>
              <ViewportPanel style={{ height: '100%' }}>
                <ViewPanel type="DESIGNABLE">
                  {() => <ComponentTreeWidget components={{ ...sources }} />}
                </ViewPanel>
                <ViewPanel type="JSONTREE" scrollable={false}>
                  {(tree, onChange) => (
                    <SchemaEditorWidget tree={tree} onChange={onChange} />
                  )}
                </ViewPanel>
                <ViewPanel type="MARKUP" scrollable={false}>
                  {(tree) => <MarkupSchemaWidget tree={tree} />}
                </ViewPanel>
                <ViewPanel type="PREVIEW">
                  {(tree) => <PreviewWidget tree={tree} />}
                </ViewPanel>
              </ViewportPanel>
            </ErrorBoundary>
          </WorkspacePanel>
        </Workspace>
        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm 
            uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
            options={{
              tableColumnList: ["phone", "id", "abc"],
              dataCodeMap: {
                "test_code": [
                  "id",
                  "user_name",
                  "phone",
                  "sex",
                  "age",
                  "birth_day",
                  "head_img",
                  "insert_date",
                  "update_date"
                ]
              }
            }}
          />
        </SettingsPanel>
      </StudioPanel>
    </Designer>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error('dom root is non-existent')
}
