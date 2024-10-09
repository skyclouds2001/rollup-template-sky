import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  plugins: [],
  test: {
    root: '.',
    include: ['tests/**'],
    exclude: ['node_modules/**', 'dist/**', '.{idea,fleet,vscode,git}/**', '*.config.*'],
    watch: false,
    environment: 'jsdom',
    reporters: ['default', 'json', 'html'],
    outputFile: {
      json: './vitest-report/report.json',
      html: './vitest-report/report.html',
    },
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage-report',
      include: ['src/**'],
      exclude: ['*.{test,spec}.*'],
    },
  },
})
