import React from 'react'

import '../styles/globals.scss'
import { Layout } from '../components'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
