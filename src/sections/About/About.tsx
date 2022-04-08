import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'
import { graphql, StaticQuery } from 'gatsby'
import React, { ReactNode } from 'react'
import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'
import Image from '../../shared/Image'
import { options } from '../../shared/RichText/options'
import { richText } from '../../shared/RichText/RichText'
import { Background } from './Background'
import { SocialLinksWrapper } from './SocialLink'

const About: React.FC = () => (
  <Section.Container id="home" Background={Background} minHeight={100}>
    <div className="h-12 w-full  sm:h-0" />
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
              file {
                url
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
          <div className="grid grid-cols-1 md:grid-cols-3 px-4">
            <div className="col-span-2 flex items-center">
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
            </div>
            <div className="flex flex-col justify-center items-center col-span-1">
              <div className="mt-10 w-1/2 lg:w-3/5">
                <Image url={profile.file.url} alt={profile.title} />
              </div>
              <Fade bottom>
                <SocialLinksWrapper
                  socialLinks={socialLinks}
                  color="textDark"
                />
              </Fade>
            </div>
          </div>
        )
      }}
    />
  </Section.Container>
)

export default About
