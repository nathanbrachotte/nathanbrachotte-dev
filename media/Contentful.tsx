import React from 'react'
import { Icon } from '@iconify/react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Headless CMS">
      <div style={{ width }}>
        <Icon icon="logos:contentful" width={width} />
      </div>
    </Tooltip>
  )
}

export default SVG
