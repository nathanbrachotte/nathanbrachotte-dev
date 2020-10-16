import React from 'react'
import { SectionLink } from 'react-scroll-section'
import MouseIcon from '../../shared/MouseIcon'

export const Mouse = ({}) => (
  <SectionLink section="about">
    {({ onClick }) => <MouseIcon onClick={onClick} />}
  </SectionLink>
)
