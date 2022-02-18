import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const GA_TRACKING_ID = 'G-VP1K3RXPKE'
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Cache-Control" content="max-age: 0, no-cache, no-store, must-revalidate" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />

          <link rel="manifest" href="/manifest/manifest.json" />
          <link rel="apple-touch-icon" href="/manifest/icon.png"></link>
          <meta name="theme-color" content="#fff" />

          <meta name="description" content="김대현 개발자의 블로그" />
          <meta property="og:title" content="개발자 블로그" />
          <meta property="og:url" content="https://zcvfcat.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/favicon.ico" />
          <meta property="og:description" content="김대현 개발자의 블로그" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="font-sans w-full antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
