/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GET_TEAM_URI: "https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&team=",
    RECENT_TEN_URI:"https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&page=1&limit=10"
  },
}

module.exports = nextConfig
