import path from 'path';
import webpack from 'webpack';
import nested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

const SRC_DIR = path.join(__dirname, '../src');

export default {
  devtool: 'source-map',
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/dev-server',
  './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    // sourceMapFileName: 'sourcemaps.map',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [
        'react-hot',
        'babel'
      ],
      include: SRC_DIR,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    nested()
  ]
};