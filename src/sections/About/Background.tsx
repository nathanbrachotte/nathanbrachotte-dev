import React from 'react'
import Triangle from '../../shared/Triangle'

export const Background: React.FC = () => (
  <div className="overflow-hidden">
    {/* Top Left */}
    <Triangle
      color="secondary"
      height={['13vh', '20vh']}
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
