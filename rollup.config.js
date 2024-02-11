import { defineConfig } from 'rollup'

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
      globals: {
        vue: 'Vue',
      },
      name: 'rollup-template-sky',
    },
  ],
  plugins: [],
})
