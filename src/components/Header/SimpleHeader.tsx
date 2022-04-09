import { Icon } from '@iconify/react'
import { navigate } from 'gatsby'
import React from 'react'
import { SectionLinks } from 'react-scroll-section'
import { Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { __DEV__ } from '../../constants'

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
`

const Header: React.FC = () => {
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
              <>
                <div className="aspect-1 w-8 h-8">
                  <Icon
                    icon="bx:arrow-back"
                    className="h-8 w-8 cursor-pointer text-white"
                    onClick={() => navigate('/')}
                  />
                </div>
                <Flex mb={10} mr={[0, 3, 5]} />
                {/* <DarkModeToggle /> */}
              </>
            )
          }}
        </SectionLinks>
      </Flex>
    </HeaderContainer>
  )
}

export default Header
