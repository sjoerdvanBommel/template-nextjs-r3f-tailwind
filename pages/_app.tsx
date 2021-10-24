import ExperienceProvider from '@components/experience/ExperienceProvider'
import Layout from '@components/Layout'
import { AppProps } from 'next/app'
import React from 'react'
import '../styles/custom.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ExperienceProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ExperienceProvider>
  );
}

export default App