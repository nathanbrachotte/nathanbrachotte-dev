import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  height?: number
}

const SVG: React.FC<SVGProps> = ({ height = 40 }) => {
  return (
    <Tooltip content="Linkedin">
      <div
        style={{ height, width: height }}
        className="self-center bg-white rounded-full">
        <Icon icon="logos:linkedin-icon" height={height} />
      </div>
    </Tooltip>
  )
}

export default SVG
