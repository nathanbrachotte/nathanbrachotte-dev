import React from 'react'
import { Icon } from '@iconify/react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  height?: number
}

const SVG: React.FC<SVGProps> = ({ height = 40 }) => {
  return (
    <Tooltip content="Redis (Database)">
      <div style={{ height }}>
        <Icon icon="logos:nodejs" height={height} />
      </div>
    </Tooltip>
  )
}

export default SVG
