const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.username = process.env.CYPRESS_USERNAME;
      config.env.password = process.env.CYPRESS_PASSWORD;
      return config;
    },
  },
});
