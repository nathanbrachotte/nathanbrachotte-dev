import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* top left */}
    {/* <Triangle
      color="primaryLight"
      height={['20vh', '18vh']}
      width={['100vw', '190vw']}
    /> */}
    {/* top right */}
    <Triangle
      color="secondary"
      height={['15vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />
    {/* bottom left */}
    <Triangle
      color="primaryLight"
      height={['10vh', '18vh']}
      width={['100vw', '120vw']}
      invertX
      invertY
    />
  </div>
)

export default Background
