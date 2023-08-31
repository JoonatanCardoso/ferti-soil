import Button from '@/components/Button'
import { Layout } from '@/layouts'
import { appWithTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'src/i18n'
import '../app/globals.css'
import nextSeo from '../config/seo'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ferti Soil</title>
        <meta name='viewport' content='width=device-width,height=device-height initial-scale=1' />
      </Head>
      <Layout>
        <NextSeo {...nextSeo} />
        <Component {...pageProps} />
        <Button />
      </Layout>
    </>
  )
}

export default appWithTranslation(App)
