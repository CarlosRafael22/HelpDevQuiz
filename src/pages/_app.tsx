import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

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
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
