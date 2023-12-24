import { ArrayTable } from './ArrayTable'
import { Card } from './Card'
import { ISchema } from '@formily/react'

export const ArrayCards: ISchema & { Addition?: ISchema } = Card
ArrayCards.Addition = ArrayTable.Addition
