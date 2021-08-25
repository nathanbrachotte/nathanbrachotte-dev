import React from 'react'
import styled from 'styled-components'
import Triangle from '../../shared/Triangle'

const FullBackground = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: -2;
  background-color: ${(props) => props.theme.colors.primaryVeryLight};
`
const Background: React.FC = () => (
  <div>
    <FullBackground />
    <Triangle
      color="primary"
      height={['30vh', '30vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['30vh', '30vh']}
      width={['100vw', '100vw']}
    />

    <Triangle
      color="secondaryLight"
      height={['30vh', '30vh']}
      width={['100vw', '100vw']}
    />
  </div>
)

export default Background
