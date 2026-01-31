const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: {
    browserName: 'chromium',
    headless: true
  }
});
