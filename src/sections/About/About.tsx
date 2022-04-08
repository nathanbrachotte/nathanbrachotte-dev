import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'
import { graphql, StaticQuery } from 'gatsby'
import React, { ReactNode } from 'react'
import Fade from 'react-reveal/Fade'
import { Box, Flex, Image } from 'rebass/styled-components'
import styled from 'styled-components'
import Section from '../../components/Section'
import { options } from '../../shared/RichText/options'
import { richText } from '../../shared/RichText/RichText'
import { Background } from './Background'
import { SocialLinksWrapper } from './SocialLink'

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
                <p className="text-md lg:text-lg">
                  {richText(aboutMeRich, {
                    // TODO - fix options types, it doesn't follow Options interface
                    ...(options as Options),
                    renderMark: {
                      ...(options.renderMark as Options['renderMark']),
                      [MARKS.BOLD]: (text: ReactNode) => (
                        <span className="font-bold text-lg lg:text-xl">
                          {text}
                        </span>
                      ),
                    },
                  })}
                </p>
              </Box>
              <Box
                width={[120, 200, 2 / 6]}
                style={{
                  maxWidth: '300px',
                  margin: 'auto',
                }}>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Box>
            </Flex>
            <Fade bottom>
              <SocialLinksWrapper socialLinks={socialLinks} color="textDark" />
            </Fade>
          </div>
        )
      }}
    />
  </Section.Container>
)

export default About
