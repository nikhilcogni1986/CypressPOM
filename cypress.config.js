const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    env:
    {
        baseurl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
    },
    defaultCommandTimeout:8000,
    specPattern: 'cypress/e2e/Tests/*.js',
    pageLoadTimeout: 60000,
    retries:{
      openMode:1,
      "runMode":1
    }
  },
});
