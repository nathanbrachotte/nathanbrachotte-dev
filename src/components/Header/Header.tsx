import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import FontAwesomeIcon from 'react-fontawesome'
import { Flex, Box } from 'rebass/styled-components'
import { graphql, navigate, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SectionLinks } from 'react-scroll-section'
import Fade from 'react-reveal/Fade'

import RouteLink from '../RouteLink'
import useTheme from '../../hooks/useTheme'
import Logo from '../../shared/Logo'

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1)

const ClickableLogo = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
`
const LogoBox = styled(Box)`
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`

interface Link {
  onClick: () => void
  isSelected: boolean
}

const formatLinks = (allLinks: unknown): unknown =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home'
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null },
  )

const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          contentfulAbout {
            logo {
              file {
                url
              }
            }
          }
        }
      `}
      render={(data) => {
        const {
          logo: {
            file: { url: logoUrl },
          },
        } = data.contentfulAbout

        return (
          <HeaderContainer>
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              p={3}>
              <SectionLinks>
                {/* TODO: Type react-scroll-section SectionLinks component */}
                {({ allLinks }) => {
                  const { home, links } = formatLinks(allLinks) as {
                    home: Link
                    links: {
                      name: string
                      value: Link
                    }[]
                  }
                  console.log({ home })
                  const homeLink = home ? (
                    <Fade left>
                      <LogoBox size={[40, 50]} overflow="clip">
                        <ClickableLogo onClick={home.onClick} type="button">
                          <Logo
                            logoUrl={logoUrl}
                            // onClick={home.onClick}
                          />
                        </ClickableLogo>
                      </LogoBox>
                    </Fade>
                  ) : (
                    <FontAwesomeIcon
                      name="home"
                      size="2x"
                      onClick={() => navigate('/')}
                      style={{
                        color: theme.colors.alwaysWhite,
                        cursor: 'pointer',
                      }}
                    />
                  )

                  const navLinks = links.map(({ name, value }) => (
                    <RouteLink
                      key={name}
                      onClick={value.onClick}
                      isSelected={value.isSelected}
                      name={name}
                    />
                  ))

                  return (
                    <Fragment>
                      {homeLink}
                      <Flex mb={10} mr={[0, 3, 5]}>
                        {navLinks}
                      </Flex>
                      {/* <DarkModeToggle /> */}
                    </Fragment>
                  )
                }}
              </SectionLinks>
            </Flex>
          </HeaderContainer>
        )
      }}
    />
  )
}

export default Header
