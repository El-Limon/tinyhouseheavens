import { defineConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:4321';
const isLocal = baseURL.includes('localhost');

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL,
  },
  ...(isLocal && {
    webServer: {
      command: 'npm run preview',
      port: 4321,
      reuseExistingServer: true,
      timeout: 15000,
    },
  }),
});
