import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { existsSync, cpSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line no-undef
const bundleName = process.env.BUNDLE_NAME;

const copyAssets = () => {
  const source = resolve(__dirname, 'assets');
  const destination = resolve(__dirname, 'build', 'assets');

  if (existsSync(source)) {
    cpSync(source, destination, { recursive: true });
    console.log('Assets folder copied successfully!');
  } else {
    console.warn('Assets folder does not exist, skipping...');
  }
};

copyAssets();

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
};
