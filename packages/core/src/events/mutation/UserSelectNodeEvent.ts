import { ICustomEvent } from '@edan-kit/designable-shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class SelectNodeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'user:select:node'
}
