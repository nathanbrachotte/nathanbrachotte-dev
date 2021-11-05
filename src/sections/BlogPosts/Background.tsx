import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* Top Right */}
    <Triangle
      color="secondaryLight"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />
    {/* Top Left */}
    <Triangle
      color="primaryDark"
      height={['5vh', '10vh']}
      width={['100vw', '100vw']}
      // invertX
    />
    {/* Bottom Right */}
    <Triangle
      color="primaryLight"
      height={['10vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
)

export default Background
