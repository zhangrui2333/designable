import { GlobalRegistry, IDesignerRegistry } from '@edan/designable-core'
import { globalThisPolyfill } from '@edan/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
