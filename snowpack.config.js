// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/dist',
    public: { url: '/', static: true },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-webpack',
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
