import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line no-undef
const bundleName = process.env.BUNDLE_NAME;

export default {
  entry: `./${bundleName}/index.js`,
  output: {
    filename: `${bundleName}.cjs`,
    path: resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  target: 'node',
  externals: {
    sharp: 'commonjs sharp',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: resolve(__dirname, 'assets'), to: resolve(__dirname, 'build', 'assets') },
        { from: resolve(__dirname, 'README.md'), to: resolve(__dirname, 'build', 'README.md') },
        { from: resolve(__dirname, 'mac-launch-template.sh'), to: resolve(__dirname, 'build') },
        { from: resolve(__dirname, 'win_launch_template.bat'), to: resolve(__dirname, 'build') },
      ],
    }),
  ],
};
