import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line no-undef
const folderName = process.env.FOLDER_NAME

export default {
  entry: `./${folderName}/index.js`,
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist', folderName),
  },
  mode: 'production',
  target: 'node',
  externals: {
    sharp: 'commonjs sharp',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};
