import { createGlobalStyle } from 'styled-components'

// const GlobalStyles = createGlobalStyle`
//     * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box
//     }

//     html {
//         font-size: 62.5%;
//     }

//     body {
//         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
//     }
// `
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyles
