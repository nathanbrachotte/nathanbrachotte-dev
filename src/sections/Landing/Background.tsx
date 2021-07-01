import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* bottom left */}
    {/* <Triangle
      color="backgroundDark"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
      invertY
      invertX
    /> */}
    {/* top left */}
    {/* <Triangle
      color="backgroundDark"
      height={['20vh', '15vh']}
      width={['98vw', '90vw']}
    /> */}

    {/* top right */}
    <Triangle
      color="primaryDark"
      height={['20vh', '20vh']}
      width={['80vw', '80vw']}
      invertX
    />

    {/* left */}
    {/* <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    /> */}

    {/* bottom left */}
    <Triangle
      color="primaryLight"
      height={['25vh', '25vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
)

export default Background
