/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GET_TEAM_URI: "https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&team=",
    RECENT_TEN_URI:"https://www.ticombo.com/prod/discovery/search/events?keyword=&competition=Premier%20League&sort=upcoming&page=1&limit=10",
    LEAGUE_PRE_URI:"https://www.ticombo.com/prod/discovery/events/",
    LEAGUE_SUFF_URI: "/listings?page=1&limit=20&include=$total&populate=rel.user:firstName,displayName,urlPicture,trustedSeller,metadata%7Creservations:amount,expiresAt,price&sort=bestprice&sellerType=allSellers",
    LEAGUE_DETAIL_URI: "https://www.ticombo.com/prod/discovery/events?id="
  },
  images: {
    domains: ['imgs.ticombo.com'], 
  },
}

module.exports = nextConfig
