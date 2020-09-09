module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/poormohammadf.github.io/'
    : '/',
    devServer: {
        proxy: {
            '/api': {
              target: 'https://poormohammadf.github.io/#/',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
            }
          },
    }
}