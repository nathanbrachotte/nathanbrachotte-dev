import React from 'react'
import { Icon } from '@iconify/react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  height?: number
}
const RATIO = 512 / 146
const SVG: React.FC<SVGProps> = ({ height = 40 }) => {
  return (
    <Tooltip content="MongoDB (Database)">
      <div style={{ height, width: height * RATIO }}>
        <Icon icon="logos:mongodb" width={height * RATIO} height={height} />
      </div>
    </Tooltip>
  )
}

export default SVG
