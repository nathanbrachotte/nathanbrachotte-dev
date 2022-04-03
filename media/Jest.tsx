import { Icon } from '@iconify/react'
import React from 'react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Jest (Unit Testing Library)">
      <div style={{ width, height: width }} className="self-center">
        <Icon icon="logos:jest" width={width} height={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
