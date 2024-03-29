import preset from '@rebass/preset'
import React from 'react'
import config from 'react-reveal/globals'
import { ScrollingProvider } from 'react-scroll-section'
import { ThemeProvider } from 'styled-components'
import colors from '../colors'
// eslint-disable-next-line import/no-unresolved
import Helmet from './Helmet'
import { GlobalStyle } from './shared/GlobalStyles'

config({ ssrFadeout: true })

const loadScript = (src: string) => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}

const Layout: React.FC = ({ children }) => {
  const theme = {
    ...preset,
    colors: colors.light,
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

export default Layout
