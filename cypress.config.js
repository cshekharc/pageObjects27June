const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'AutoTestReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://automationteststore.com/',
    experimentalRunAllSpecs: true,
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0
    },
    env:{
      userName: "username",
      password: "passWord",
    }
  },
  watchForFileChanges: false,
  video: false
});
