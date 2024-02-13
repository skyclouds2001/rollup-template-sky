import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      globals: {},
      name: 'rollup-template-sky',
    },
  ],
  external: [],
  plugins: [
    alias({
      entries: {},
    }),
    nodeResolve(),
    typescript(),
    commonjs(),
    terser(),
  ],
})
