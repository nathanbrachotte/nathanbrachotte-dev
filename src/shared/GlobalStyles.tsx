import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
    background: ${(props) => {
      console.log(props)
      console.log(props.theme)
      console.log(props.theme.colors)
      return props.theme.colors.background
    }};
    color: ${(props) => props.theme.colors.text};
  }
`
