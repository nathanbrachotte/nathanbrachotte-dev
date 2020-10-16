import React from 'react'
import { SectionLink } from 'react-scroll-section'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../components/Section'
import MouseIcon from '../shared/MouseIcon'
import { CentralInfo } from '../components/Landing/CentralInfo'
import { Background } from '../components/Landing/Background'
import { Mouse } from '../shared/Mouse'
import { WebsiteScreen } from '../screens/types'

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
            <Mouse to={WebsiteScreen.about} />
          </>
        )
      }}
    />
  </Section.Container>
)

export default LandingPage
