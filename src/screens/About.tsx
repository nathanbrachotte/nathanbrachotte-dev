import React from 'react'
import { Box, Image, Flex } from 'rebass/styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import Section from '../components/Section'
import Triangle from '../shared/Triangle'
import markdownRenderer from '../components/MarkdownRenderer'

const Fade = require('react-reveal/Fade')

const Background: React.FC = () => (
  <div>
    {/* Bottom Left */}
    {/* <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    /> */}

    {/* Top Right */}
    {/* <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    /> */}

    {/* Top Left */}
    <Triangle
      color="secondary"
      height={['5vh', '12vh']}
      width={['100vw', '100vw']}
    />
  </div>
)

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`

const About: React.FC = () => (
  <Section.Container id="About Me" Background={Background}>
    <Section.Header name="About Me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={(data) => {
        const { aboutMe, profile } = data.contentfulAbout
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{
                maxWidth: '300px',
                margin: 'auto',
              }}>
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        )
      }}
    />
  </Section.Container>
)

export default About
