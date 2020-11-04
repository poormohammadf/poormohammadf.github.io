module.exports = {
  "publicPath": "/",
  "devServer": {
    "proxy": {
      "/api": {
        "target": "https://poormohammadf.github.io/#/",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}