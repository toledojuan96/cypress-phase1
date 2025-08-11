import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
