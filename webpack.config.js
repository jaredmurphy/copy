const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    target: "web",
    entry: {
      app: ["./client/index.js"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle-front.js",
    },
    devServer: {
      host: '0.0.0.0', // Required for docker
      publicPath: '/assets/',
      contentBase: path.resolve(__dirname, "./views"),
      watchContentBase: true,
      compress: true,
      port: 9001
    },
    devtool: 'inline-source-map',
  },
  {
    target: "node",
    entry: {
      app: ["./server/index.js"]
    },
    output: {
      path: path.resolve(__dirname, "./build/"),
      filename: "bundle-back.js"
    },
    externals: [nodeExternals()],
  }
];