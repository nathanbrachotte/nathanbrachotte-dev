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
      return props.theme.colors.background
    }};
    color: ${(props) => props.theme.colors.text};
  }  
}
`

// p {
//     color: #00F00F
//   }
// @media only screen and (max-width:1023px) {
//   p {
//     color: #ff0
//   }
// }
// @media only screen and (min-width:1024px) and (max-width:1620px) {
//   p {
//     color: #FF0000
//   }
// }
