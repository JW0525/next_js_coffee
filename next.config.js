/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI: 'mongodb+srv://constell847:xhfmqldys1!@cluster0.5orgwus.mongodb.net/?retryWrites=true&w=majority',
    DB_NAME: 'cafe',
    // CLOUDINARY_URL=cloudinary: //xxxxxxxxxxx:yyyyyyyyyyyyyyyyyyy@cpro95,
    // SESSION_SECRET: keyboard cat
  }

}

module.exports = nextConfig
