import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '60vh']}
      width={['95vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
      invertY
      invertX
    />
  </div>
)

export default Background
