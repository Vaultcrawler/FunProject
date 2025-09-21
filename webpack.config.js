import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'test'),
        watch: true,
      },
      {
        directory: path.join(__dirname, 'assets'),
      }
    ],
    compress: true,
    port: 9000,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    client: {
      overlay: true,
    },
  },
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
};