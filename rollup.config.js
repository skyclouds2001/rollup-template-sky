import path from 'node:path'
import { defineConfig } from 'rollup'
import virtual from '@rollup/plugin-virtual'
import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
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
      'virtual-module': `export default 10`,
    }),
    alias({
      entries: {
        '@': path.resolve('.', 'src'),
      },
    }),
    replace({
      objectGuards: true,
      preventAssignment: true,
      sourceMap: true,
      values: {
        __BUILD_DATE__: Date.now(),
      },
    }),
    json({
      compact: true,
      namedExports: false,
      preferConst: true,
    }),
    nodeResolve({
      browser: true,
      extensions: ['.cjs', '.mjs', '.js', '.jsx', '.cts', '.mts', '.ts', '.tsx', '.json', '.node'],
    }),
    typescript(),
    commonjs({
      extensions: ['.cjs', '.mjs', '.js', '.jsx', '.cts', '.mts', '.ts', '.tsx', '.json', '.node'],
    }),
    terser(),
  ],
})
