import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // ADD HERE
  globalTeardown: './global-teardown.ts',

  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: false,
  retries: 1,
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list'],
    ['json', { outputFile: 'test-results.json' }]
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation']
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],

});