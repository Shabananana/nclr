module.exports = {
  entry: {
    'bundle': './client/main.js',
  },

  output: {
    path: './dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {stage: 0}},
      { test: /\.json/, loader: 'json-loader'},
    ]
  },
};
