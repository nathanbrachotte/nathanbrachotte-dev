import React, { FunctionComponent } from 'react'
import Slide from 'react-reveal/Slide'
import { Section } from 'react-scroll-section'
import { Heading } from 'rebass/styled-components'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LinkAnimated from './LinkAnimated'

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`

const DefaultBackground = () => <div />

interface ContainerProps {
  id: string
  Background: FunctionComponent
}

const Container: React.FC<ContainerProps> = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
)

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
}

interface HeaderProps {
  name: string
  icon?: string
  label?: string
}

const Header: React.FC<HeaderProps> = ({ name, icon = '', label = '' }) => {
  return (
    <Slide left>
      <Heading color="secondaryDark" mb={4}>
        <LinkAnimated selected>
          {name}
          {icon && (
            <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
              {icon}
            </span>
          )}
        </LinkAnimated>
      </Heading>
    </Slide>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
}

export default {
  Container,
  Header,
}
