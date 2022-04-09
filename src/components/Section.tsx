import React, { FunctionComponent, ReactNode } from 'react'
import Slide from 'react-reveal/Slide'
import { Section } from 'react-scroll-section'
import { Heading } from 'rebass/styled-components'
import styled from 'styled-components'
import Spacer from '../shared/Spacer'
import { breakpoints } from '../styles/sizes'
import LinkAnimated from './LinkAnimated'

interface ContainerProps {
  id: string
  Background: FunctionComponent
  minHeight?: number
}

const SectionContainer = styled.div<{ minHeight: number }>`
  min-height: ${(props) => props.minHeight}vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  ${breakpoints.xs} {
    padding: 2em 1em;
  }
`

const DefaultBackground = () => <div />

const Container: React.FC<ContainerProps> = ({
  id,
  children,
  Background = DefaultBackground,
  minHeight = 70,
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer minHeight={minHeight}>
      <Spacer />
      {children}
      <Spacer />
    </SectionContainer>
  </Section>
)

interface HeaderProps {
  name: string
  icon?: string
  label?: string
  Subtitle?: ReactNode
  shouldAnimate?: boolean
}

const Header: React.FC<HeaderProps> = ({
  name,
  icon = '',
  label = '',
  Subtitle,
  shouldAnimate,
}) => {
  const Content = (
    <>
      <Heading
        as="h1"
        fontSize={[3, 4, 5]}
        color="textDark"
        mb={Subtitle ? 3 : 4}>
        <LinkAnimated color="secondaryDark" selected>
          {name}
          {icon && (
            <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
              {icon}
            </span>
          )}
        </LinkAnimated>
      </Heading>
      {Subtitle}
    </>
  )
  return <>{shouldAnimate ? <Slide left>{Content}</Slide> : Content}</>
}

export default {
  Container,
  Header,
}
