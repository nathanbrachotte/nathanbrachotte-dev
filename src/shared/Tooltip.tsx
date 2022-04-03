import React from 'react'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css' // eslint-disable-line

// TODO: Upgrade from Tippy to Floating UI Lib (https://github.com/atomiks/tippyjs-react)
export const Tooltip: React.FC<{
  content: JSX.Element | string
  children: JSX.Element
  onCreate?: (tip: any) => any
}> = (props) => (
  <Tippy content={props.content} placement="bottom" trigger="mouseenter">
    {props.children}
  </Tippy>
)
