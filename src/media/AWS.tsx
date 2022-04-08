import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Amazon Web Services">
      <div style={{ width }}>
        <Icon icon="logos:aws" width={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
