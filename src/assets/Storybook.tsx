import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Storybook (Visual Testing)">
      <div style={{ width }}>
        <Icon icon="logos:storybook-icon" width={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
