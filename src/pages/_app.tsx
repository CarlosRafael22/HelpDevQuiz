import { AppProps } from 'next/app'
import Head from 'next/head'
// import GlobalStyles from 'styles/global'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const GlobalStyle = createGlobalStyle`
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

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Dev Resources Quiz </title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple quiz to help developers find good resources to learn"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
