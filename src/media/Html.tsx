import React from 'react'
import { Tooltip } from '../shared/Tooltip'

interface SVGProps {
  width?: number
}

const SVG: React.FC<SVGProps> = ({ width = 40 }) => {
  return (
    <Tooltip content="HTML5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width}>
        <path
          fill="#E44D26"
          d="M107.6 470.9l-33-370.3h362.8l-33 370.2L255.7 512z"
        />
        <path fill="#F16529" d="M256 480.5l120-33.3L404.3 131H256z" />
        <path
          fill="#EBEBEB"
          d="M256 268.2h-60l-4.2-46.5H256v-45.4H142.1l1.1 12.2 11.2 125.1H256zM256 386.2h-.2l-50.6-13.6-3.2-36.3h-45.6l6.4 71.3 93 25.9.2-.1z"
        />
        <path
          fill="#ffffff"
          d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21.1v23h-23.1V0zM206 22.9h-20.3V0h63.7v22.9h-20.3V69H206V23zM259.5 0h24l14.9 24.3L313.2 0h24v69h-23V34.8l-15.8 24.6h-.4l-16-24.6V69h-22.5V0zM348.7 0h23.1v46.2h32.5V69h-55.6V0z"
        />
        <path
          fill="#FFF"
          d="M255.8 268.2v45.4h56l-5.3 59-50.7 13.6v47.2l93.1-25.8.7-7.6 10.7-119.6 1.1-12.2h-12.2zM255.8 176.3v45.4H365.5l1-10.2 2-23 1.1-12.2z"
        />
      </svg>
    </Tooltip>
  )
}

export default SVG
