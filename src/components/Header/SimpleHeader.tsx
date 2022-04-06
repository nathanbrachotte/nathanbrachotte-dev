import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import FontAwesomeIcon from 'react-fontawesome'
import { navigate } from 'gatsby'
import { Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { SectionLinks } from 'react-scroll-section'

import DarkModeToggle from './DarkModeToggle'
import useTheme from '../../hooks/useTheme'
import { __DEV__ } from '../../constants'

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
`

const Header: React.FC = () => {
  const theme = useTheme()

  const homeLink = (
    <div className="aspect-1 w-8 h-8">
      <FontAwesomeIcon
        name="arrow-left"
        size="2x"
        onClick={() => navigate('/')}
        style={{
          color: theme.colors.alwaysWhite,
          cursor: 'pointer',
        }}
      />
    </div>
  )

  return (
    <HeaderContainer>
      {__DEV__ && (
        <div className="bg-pink-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1 w-full fixed z-50" />
      )}
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}>
        <SectionLinks>
          {() => {
            return (
              <Fragment>
                {homeLink}
                <Flex mb={10} mr={[0, 3, 5]} />
                {/* <DarkModeToggle /> */}
              </Fragment>
            )
          }}
        </SectionLinks>
      </Flex>
    </HeaderContainer>
  )
}

export default Header
