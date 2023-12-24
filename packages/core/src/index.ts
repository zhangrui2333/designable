import * as Core from './exports'
export * from './exports'
import { globalThisPolyfill } from '@edan-kit/designable-shared'

if (globalThisPolyfill?.['Designable']?.['Core']) {
  if (module.exports) {
    module.exports = {
      __esModule: true,
      ...globalThisPolyfill['Designable']['Core'],
    }
  }
} else {
  globalThisPolyfill['Designable'] = globalThisPolyfill['Designable'] || {}
  globalThisPolyfill['Designable'].Core = Core
}
