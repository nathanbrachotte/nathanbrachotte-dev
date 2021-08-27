import React from 'react'
import Triangle from '../../shared/Triangle'

export const Background: React.FC = () => (
  <div>
    {/* Bottom Right */}
    <Triangle
      color="secondary"
      height={['10vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
    {/* Top Left */}
    <Triangle
      color="secondary"
      height={['5vh', '12vh']}
      width={['100vw', '100vw']}
    />
  </div>
)
