import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import { sendPageView } from '@/utils/gtag'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

export default function App ({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      sendPageView(url)
    }
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>【同人遊戲】灰妲x咪姆x秘境尋寶</title>
        <meta name='description' content='意外獲得藏寶圖的灰妲，與被拉壯丁的咪姆開始一場探險。' />
        <meta property='og:url' content='https://dada-meemu-block.vercel.app' />
        <meta property='og:locale' content='zh_TW' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='【同人遊戲】灰妲x咪姆x秘境尋寶' />
        <meta property='og:description' content='意外獲得藏寶圖的灰妲，與被拉壯丁的咪姆開始一場探險。' />
        <meta property='og:image' content='https://dada-meemu-block.vercel.app/img/og.png' />
        <meta property='og:image:alt' content='意外獲得藏寶圖的灰妲，與被拉壯丁的咪姆開始一場探險。' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='【同人遊戲】灰妲x咪姆x秘境尋寶' />
        <meta name='twitter:site' content='@tn604000' />
        <meta name='twitter:image' content='https://dada-meemu-block.vercel.app/img/x.png' />
        <meta name='twitter:image:alt' content='意外獲得藏寶圖的灰妲，與被拉壯丁的咪姆開始一場探險。' />
        <meta name='twitter:description' content='意外獲得藏寶圖的灰妲，與被拉壯丁的咪姆開始一場探險。' />
        <meta name='twitter:creator' content='@tn604000' />
        <meta property='twitter:domain' content='dada-meemu-block.vercel.app' />
        <meta property='twitter:url' content='https://dada-meemu-block.vercel.app' />
      </Head>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-YNQ2XENHRF'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YNQ2XENHRF', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
