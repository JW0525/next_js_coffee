/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MONGODB_URI: 'mongodb+srv://constell847:xhfmqldys1!@cluster0.5orgwus.mongodb.net/?retryWrites=true&w=majority',
    DB_NAME: 'cafe',
    // CLOUDINARY_URL=cloudinary: //xxxxxxxxxxx:yyyyyyyyyyyyyyyyyyy@cpro95,
    // SESSION_SECRET: keyboard cat
  },
  compiler: {
    // emotion: boolean | {
    //   // default is true. It will be disabled when build type is production.
    //   sourceMap: boolean,
    //   // default is 'dev-only'.
    //   autoLabel: 'never' | 'dev-only' | 'always',
    //   // default is '[local]'.
    //   // Allowed values: `[local]` `[filename]` and `[dirname]`
    //   // This option only works when autoLabel is set to 'dev-only' or 'always'.
    //   // It allows you to define the format of the resulting label.
    //   // The format is defined via string where variable parts are enclosed in square brackets [].
    //   // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
    //   labelFormat: string,
    // },
  },
}

module.exports = nextConfig
