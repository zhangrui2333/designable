import React from 'react'
import { observer, ReactFC } from '@formily/reactive-react'
import { DroppableWidget } from '@edan-cli/designable-react'
import './styles.less'

export const Container: ReactFC = observer((props) => {
  return <DroppableWidget>{props.children}</DroppableWidget>
})

export const withContainer = (Target: React.JSXElementConstructor<any>) => {
  return (props: any) => {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    )
  }
}
