import { GlobalRegistry, IDesignerRegistry } from '@edan-kit/designable-core'
import { globalThisPolyfill } from '@edan-kit/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
