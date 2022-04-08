import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import { SocialLink } from '../../sections/About/SocialLink'
import Logo from '../../shared/Logo'
import { breakpoints } from '../../styles/sizes'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.xs} {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`

const Footer: React.FC = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          roles
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
          }
          logo {
            file {
              url
            }
          }
        }
      }
    `}
    render={(data) => {
      const { name, socialLinks, logo } = data.contentfulAbout

      const logoUrl = logo.file.url

      return (
        <Fade bottom>
          <Box p={[2, 3]} backgroundColor="primaryDark" id="footer">
            <FooterContainer>
              <Fade left>
                <TextFooter fontSize={[1, 2]}>
                  <Logo logoUrl={logoUrl} />
                </TextFooter>
              </Fade>
              <Flex mr={5}>
                <Fade right>
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                      <SocialLink
                        fontAwesomeIcon={rest.fontAwesomeIcon}
                        name={rest.name}
                        url={rest.url}
                        color="alwaysWhite"
                      />
                    </Box>
                  ))}
                </Fade>
              </Flex>
            </FooterContainer>
          </Box>
        </Fade>
      )
    }}
  />
)

export default Footer
