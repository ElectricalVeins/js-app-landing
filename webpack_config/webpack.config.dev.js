const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );

const developmentConfig = merge( commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join( __dirname, '../build' ),
  },

  module: {
    rules: [
      /*
       * STYLES RULE
       * */
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2,
            }
          },
          'sass-loader',
        ]
      }
    ]
  }
} );

module.exports = developmentConfig;
