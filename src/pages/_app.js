import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
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
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
