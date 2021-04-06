module.exports = {
  publicPath: "/",
  devServer: {
    "proxy": {
      "/api": {
        "target": "https://poormohammadf.github.io",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  css: { loaderOptions: { css: { url: false } } },
  configureWebpack: (config) => {
    config.module.rules = [...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
}