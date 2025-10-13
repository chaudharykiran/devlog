import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
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
    globals: true,
    browser: {
      enabled: false,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ]
    }
  },
})