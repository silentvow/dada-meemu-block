import { Head, Html, Main, NextScript } from 'next/document'

const GTAG_JS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-YNQ2XENHRF');
`

export default function Document () {
  return (
    <Html lang='zh-Hant'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-YNQ2XENHRF' />
        <script id='google-analytics' dangerouslySetInnerHTML={{ __html: GTAG_JS }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
