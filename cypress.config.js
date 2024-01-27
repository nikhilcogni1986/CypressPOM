const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:
    {
        baseurl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
    },
    defaultCommandTimeout:8000,
    specPattern: 'cypress/e2e/Tests/*.js',
    pageLoadTimeout: 60000
  },
});
