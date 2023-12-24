import { GlobalRegistry, IDesignerRegistry } from '@edan-cli/designable-core'
import { globalThisPolyfill } from '@edan-cli/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
