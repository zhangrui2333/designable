import { GlobalRegistry } from '@edan-cli/designable-core'
import zhCN from './zh-CN'
import enUS from './en-US'
import koKR from './ko-KR'

GlobalRegistry.registerDesignerLocales(zhCN, enUS, koKR)
