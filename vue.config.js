const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:4004',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        Public: path.resolve(__dirname, 'public'),
        '@': path.resolve(__dirname, 'src'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Components: path.resolve(__dirname, 'src/components'),
        Controller: path.resolve(__dirname, 'src/controller/'),
        Controllers: path.resolve(__dirname, 'src/controller/'),
        Plugins: path.resolve(__dirname, 'src/plugins/'),
        Router: path.resolve(__dirname, 'src/router/'),
        Config: path.resolve(__dirname, 'src/config/'),
        config: path.resolve(__dirname, 'src/config/'),
        Views: path.resolve(__dirname, 'src/views/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        style: path.resolve(__dirname, 'src/style/'),
        Helpers: path.resolve(__dirname, 'src/helpers/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
        Helper: path.resolve(__dirname, 'src/helpers/'),
        Interface: path.resolve(__dirname, 'src/components/Interface/'),
        interface: path.resolve(__dirname, 'src/components/interface/'),
      },
    },
  },
};
