import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

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
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
