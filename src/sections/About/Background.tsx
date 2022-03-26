import React from 'react'
import Triangle from '../../shared/Triangle'

export const Background: React.FC = () => (
  <div>
    {/* Top Left */}
    <Triangle
      color="secondary"
      height={['5vh', '12vh']}
      width={['100vw', '100vw']}
    />
    {/* Bottom Right */}
    <Triangle
      color="primaryLight"
      height={['10vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
  </div>
)
