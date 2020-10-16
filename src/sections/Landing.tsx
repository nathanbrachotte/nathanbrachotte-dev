import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Flex, Box, Text } from 'rebass/styled-components'
import TextLoop from 'react-text-loop'
import { SectionLink } from 'react-scroll-section'
import Section from '../components/Section'
import { SocialLink } from '../components/Landing/SocialLink'
import MouseIcon from '../MouseIcon'
import Triangle from '../components/Triangle'
import { CentralInfo } from '../components/Landing/CentralInfo'

const Background = () => (
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

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout
        const { deterministicBehaviour } = site.siteMetadata

        console.log({ name, socialLinks, roles, deterministicBehaviour })

        return (
          <>
            <CentralInfo name={name} roles={roles} socialLinks={socialLinks} />
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </>
        )
      }}
    />
  </Section.Container>
)

export default LandingPage
