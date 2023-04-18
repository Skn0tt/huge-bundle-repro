/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "nl", "de", "pt", "es", "it", "ja", "ko", "zh"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
