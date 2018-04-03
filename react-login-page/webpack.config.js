module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
      }
      ]
    },
    devtool: 'source-map'
  };
  