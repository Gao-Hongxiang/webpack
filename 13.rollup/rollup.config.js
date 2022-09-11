//import build from './plugins/rollup-plugin-build.js';
import polyfill from './plugins/rollup-plugin-polyfill';

export default {
  input: './src/index.js',
  output: {
    dir: 'dist'
  },
  plugins: [
    //build({ name: 'build-plugin' }),
    polyfill()
  ]
}