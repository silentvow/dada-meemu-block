/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
  },
  images: { unoptimized: true },
}

module.exports = nextConfig
