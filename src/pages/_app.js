import '@/styles/globals.css'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>妲妲咪咪探大吉</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
