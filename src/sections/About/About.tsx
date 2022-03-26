import React from 'react'
import { Box, Image, Flex, Heading, Text } from 'rebass/styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'
import { Background } from './Background'
import markdownRenderer from '../../components/MarkdownRenderer'
import CentralInfo from '../Landing/CentralInfo'
import { SocialLinksWrapper } from '../Landing/SocialLink'
import { richText } from '../../components/RichText'

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`

const About: React.FC = () => (
  <Section.Container id="home" Background={Background} maxHeight={100}>
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
            childContentfulAboutAboutMeRichRichTextNode {
              aboutMeRich
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
            logo {
              file {
                url
              }
            }
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={(data) => {
        const {
          aboutMe,
          profile,
          name,
          socialLinks,
          roles,
          childContentfulAboutAboutMeRichRichTextNode: { aboutMeRich },
        } = data.contentfulAbout
        console.log({ aboutMeRich })
        return (
          <div>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mb={[2, 3, 0]}>
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade left>
                  <p className="text-md lg:text-lg">
                    {richText(aboutMeRich)}
                    {/* <ReactMarkdown
                      source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                      renderers={markdownRenderer}
                    /> */}
                  </p>
                </Fade>
              </Box>
              <Box
                width={[120, 200, 2 / 6]}
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
            <Fade bottom>
              <SocialLinksWrapper
                socialLinks={socialLinks}
                color="primaryDark"
              />
            </Fade>
          </div>
        )
      }}
    />
  </Section.Container>
)

export default About
