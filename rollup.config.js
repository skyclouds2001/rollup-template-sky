import path from 'node:path'
import { defineConfig } from 'rollup'
import virtual from '@rollup/plugin-virtual'
import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      sourcemap: true,
      globals: {},
      name: 'rollup-template-sky',
    },
  ],
  external: [],
  plugins: [
    virtual({
      virtual: 'export default 0',
    }),
    alias({
      entries: {
        '@': path.resolve(__dirname, 'src'),
      },
    }),
    nodeResolve(),
    replace({
      __BUILD_DATE__: Date.now(),
    }),
    typescript(),
    commonjs(),
    json(),
    terser(),
  ],
})
