import React from 'react'
import { Tooltip } from '../src/shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="Gatsby">
      <svg width={width} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <g fillRule="nonzero" fill="none">
          <g fill="#FFF">
            <path d="M25 14h-7v2h4.8a9 9 0 01-5.8 6.5L5.5 11A9 9 0 0114 5c3 0 5.7 1.5 7.4 3.8l1.5-1.3a11 11 0 00-19.6 4.1l13.2 13.2C21.3 23.6 25 19.2 25 14zM3 14.1a10.9 10.9 0 0010.8 10.8L3 14.1z" />
          </g>
          <path
            d="M14 0A14 14 0 000 14a14 14 0 0014 14 14 14 0 0014-14A14 14 0 0014 0zM6.2 21.8A10.9 10.9 0 013 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6a11 11 0 0119.6-4.1l-1.5 1.3A9.2 9.2 0 0014 5a9.1 9.1 0 00-8.5 6L17 22.5a9 9 0 005.8-6.5H18v-2h7a11 11 0 01-8.6 10.7z"
            fill="#639"
          />
        </g>
      </svg>
    </Tooltip>
  )
}

export default SVG
