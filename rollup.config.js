import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './src/index.js',
  output: {
    file: './lib/respectre.js',
    format: 'cjs',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
}
