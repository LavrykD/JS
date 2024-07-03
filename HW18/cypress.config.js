const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  viewportHeight: 960,
  viewportWidth: 1440,
  e2e: {
    baseUrl: 'https://dev.omni-dispatch.com',
    setupNodeEvents(on, config) {
      config.env.username = process.env.CYPRESS_EMAIL;
      config.env.password = process.env.CYPRESS_PASS;
      return config;
    },
  },
});
