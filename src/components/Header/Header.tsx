import { graphql, navigate, StaticQuery } from 'gatsby'
import React, { Fragment } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade'
import { SectionLinks } from 'react-scroll-section'
import { Box, Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { __DEV__ } from '../../constants'
import useTheme from '../../hooks/useTheme'
import Logo, { LOGO_SIZES } from '../../shared/Logo'
import RouteLink from '../RouteLink'

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
            {__DEV__ && (
              <div className="bg-pink-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1 w-full fixed z-50" />
            )}
            <Flex
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              backgroundColor="primaryDark">
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
                  const homeLink = home ? (
                    <Fade left>
                      <LogoBox size={LOGO_SIZES} overflow="clip">
                        <ClickableLogo onClick={home.onClick} type="button">
                          <Logo logoUrl={logoUrl} />
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
                      <Fade right>
                        <Flex mb={10} mr={[0, 3, 5]} mt={[10, 0, 0, 0]}>
                          {navLinks}
                        </Flex>
                      </Fade>
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
