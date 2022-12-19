/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  // reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MONGODB_URI:'mongodb+srv://constell:1234@cluster0.56jgory.mongodb.net/project_cafe?retryWrites=true&w=majority',
    DB_NAME: 'cafe-mongodb',
    SESSION_SECRET: 'keyboard cat'
  }
}

module.exports = nextConfig