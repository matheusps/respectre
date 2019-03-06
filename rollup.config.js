import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import scss from 'rollup-plugin-scss'

export default {
  input: './src/index.js',
  output: {
    file: './lib/respectre.js',
    format: 'es',
    sourcemap: true,
    name: 'respectre',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    scss(),
  ],
}
