import webpack from "webpack";
import path from "path";
import "babel-polyfill";

export default {
  module: {
    rules: [
      {
        test: /\.(png|eot|woff|woff2|ttf|svg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
        }
      }
    ]
  },

  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["babel-polyfill","./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals:  [/^vendor\/.+\.js$/]
};
