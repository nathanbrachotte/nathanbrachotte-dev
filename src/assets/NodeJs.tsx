import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  height?: number
}

const SVG: React.FC<SVGProps> = ({ height = 40 }) => {
  return (
    <Tooltip content="Node.js (Backend)">
      <div style={{ height }}>
        <Icon icon="logos:nodejs" height={height} />
      </div>
    </Tooltip>
  )
}

export default SVG
