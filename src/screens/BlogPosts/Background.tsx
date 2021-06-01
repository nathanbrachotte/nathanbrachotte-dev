import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* Top Right */}
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />
    {/* Bottom Left */}
    {/* <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    /> */}
    {/* Bottom Right */}
    <Triangle
      color="primaryDark"
      height={['10vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
)

export default Background
