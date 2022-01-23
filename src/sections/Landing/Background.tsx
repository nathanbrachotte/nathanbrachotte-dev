import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* top left */}
    <Triangle
      color="primaryDark"
      height={['20vh', '0vh']}
      width={['100vw', '100vw']}
    />
    {/* top right */}
    <Triangle
      color="primaryDark"
      height={['15vh', '15vh']}
      width={['100vw', '80vw']}
      invertX
    />
    {/* bottom left */}
    <Triangle
      color="primaryLight"
      height={['10vh', '25vh']}
      width={['100vw', '100vw']}
      // style={{
      //   marginLeft: '-50px',
      // }}
      invertY
    />
  </div>
)

export default Background
