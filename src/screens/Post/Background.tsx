import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <>
    <Triangle
      color="backgroundDark"
      height={['15vh', '5vh']}
      width={['100vw', '100vw']}
      invertX
    />
    <Triangle
      color="secondary"
      height={['5vh', '15vh']}
      width={['70vw', '40vw']}
      invertY
    />
    <Triangle
      color="primaryDark"
      height={['5vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </>
)

export default Background
