import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Sketch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 394 356"
        width={width}>
        <g fillRule="nonzero" fill="none">
          <path
            fill="#FDB300"
            d="M85.8 11.7L196.6 0l110.8 11.7L393.2 127l-196.6 229L0 126.8z"
          />
          <path
            fill="#EA6C00"
            d="M79.6 126.9l117 229L0 126.8zM313.6 126.9l-117 229 196.6-229z"
          />
          <path fill="#FDAD00" d="M79.6 126.9h234l-117 229z" />
          <g>
            <path
              fill="#FDD231"
              d="M196.6 0L85.8 11.7 79.6 127zM196.6 0l110.8 11.7 6.2 115.2z"
            />
            <path
              fill="#FDAD00"
              d="M393.2 126.9L307.4 11.7l6.2 115.2zM0 126.9L85.8 11.7 79.6 127z"
            />
            <path fill="#FEEEB7" d="M196.6 0l-117 126.9h234z" />
          </g>
        </g>
      </svg>
    </Tooltip>
  )
}

export default SVG
