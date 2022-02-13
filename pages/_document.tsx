import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

// const GA_TRACKING_ID = 'G-5TYCHR7EYY'
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
          {/* <link rel="stylesheet" href="https://unpkg.com/d3-milestones/build/d3-milestones.css" /> */}

          {/* <meta property="og:title" content="front-end 개발자 이력서" />
          <meta property="og:url" content="https://zcvfcat.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/assets/profile.webp" />
          <meta property="og:description" content="김대현 개발자의 이력서" /> */}

          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
          /> */}
        </Head>
        <body className="font-sans antialiased w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
