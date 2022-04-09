import React from 'react'
import Triangle from '../shared/Triangle'

const Background: React.FC = () => (
  <div className="absolute top-0 w-full left-0 bottom-0">
    <Triangle
      color="secondary"
      height={['5vh', '10vh']}
      width={['70vw', '40vw']}
      invertY
    />
    <Triangle
      color="primaryDark"
      height={['5vh', '5vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
)

export default Background
