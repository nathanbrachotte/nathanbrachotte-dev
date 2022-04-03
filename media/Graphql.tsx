import React from 'react'
import { Icon } from '@iconify/react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="GraphQl">
      <div style={{ width, height: width }} className="self-center">
        <Icon icon="logos:graphql" width={width} height={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
