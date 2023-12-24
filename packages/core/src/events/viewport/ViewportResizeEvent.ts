import { ICustomEvent } from '@edan-kit/designable-shared'
import { AbstractViewportEvent } from './AbstractViewportEvent'

export class ViewportResizeEvent
  extends AbstractViewportEvent
  implements ICustomEvent
{
  type = 'viewport:resize'
}
