import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Jest (Unit testing)">
      <div style={{ width, height: width }} className="self-center">
        <Icon icon="logos:jest" width={width} height={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
