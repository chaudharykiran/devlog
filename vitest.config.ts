import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [
      '**/e2e/**',
      '**/app/components/ui/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.cache/**',
      '**/coverage/**',
      '**/*.config.*',
      '**/*.setup.*',
      '**/public/**',
      '**/scripts/**',
    ],
  },
})