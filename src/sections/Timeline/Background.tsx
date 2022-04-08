import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    <Triangle
      color="primaryLight"
      height={['30vh', '30vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['3vh', '8vh']}
      width={['100vw', '100vw']}
    />
  </div>
)

export default Background
