import React from 'react'
import { Icon } from '@iconify/react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  height?: number
}

const RATIO = 512 / 149
const SVG: React.FC<SVGProps> = ({ height = 40 }) => {
  return (
    <Tooltip content="ExpressJS (Backend)">
      <div style={{ height, width: RATIO * height }} className="self-center">
        <Icon icon="logos:express" height={height} />
      </div>
    </Tooltip>
  )
}

export default SVG
