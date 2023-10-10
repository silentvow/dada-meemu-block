import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>灰妲x咪姆x秘境尋寶</title>
      </Head>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
