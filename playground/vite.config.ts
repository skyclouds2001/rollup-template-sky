import { defineConfig, loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV ?? 'development', '.')

export default defineConfig({
  css: {
    preprocessorMaxWorkers: true,
    devSourcemap: true,
  },
  json: {
    namedExports: false,
    stringify: 'auto',
  },
  server: {
    host: env.VITE_DEV_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_DEV_SERVER_PORT) ?? 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: env.VITE_PREVIEW_SERVER_HOST ?? 'localhost',
    port: Number.parseInt(env.VITE_PREVIEW_SERVER_PORT) ?? 4173,
    strictPort: true,
    open: true,
  },
})
