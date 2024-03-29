import '@/assets/css/tailwind.css'
import '@/assets/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from 'components/molecules/analytics'
import LayoutWrapper from 'layouts/LayoutWrapper'
import { ClientReload } from 'modules/ClientReload'

import menu from '@/assets/menutree.json'
import MenuTree from 'modules/MenuTree'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* eslint-disable-next-line prettier/prettier */}
        <script data-ad-client="ca-pub-3299226720939303" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <MenuTree menu={menu} />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
