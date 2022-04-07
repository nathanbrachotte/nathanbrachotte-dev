import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Box, Flex, Image } from 'rebass/styled-components'
import styled from 'styled-components'
import { richText } from '../../components/RichText'
import Section from '../../components/Section'
import { SocialLinksWrapper } from '../Landing/SocialLink'
import { Background } from './Background'

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`

const About: React.FC = () => (
  <Section.Container id="home" Background={Background} minHeight={100}>
    <div className="h-8 w-full  sm:h-0" />
    <Section.Header name="About Me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
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
          profile,
          socialLinks,
          childContentfulAboutAboutMeRichRichTextNode: { aboutMeRich },
        } = data.contentfulAbout

        return (
          <div>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mb={[2, 3, 0]}>
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade left>
                  <p className="text-md lg:text-lg">{richText(aboutMeRich)}</p>
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
