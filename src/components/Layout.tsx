import React, { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
// @ts-ignore
import config from 'react-reveal/globals'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../colors'
import Helmet from './Helmet'

const { ScrollingProvider } = require('react-scroll-section')

const preset = require('@rebass/preset')

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`

config({ ssrFadeout: true })

const loadScript = (src: string) => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}

const Layout = ({ children }: { children: React.FC }) => {
  const darkMode = useDarkMode(false)

  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js')
  }, [])

  const theme = {
    ...preset,
    colors: darkMode.value ? colors.dark : colors.light,
    fonts: {
      body: 'Cabin, Open Sans, sans-serif',
      heading: 'inherit',
      monospace: 'monospace',
    },
  }

  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollingProvider>
          <Helmet />
          {children}
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
