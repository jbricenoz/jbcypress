/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require('path')
const fs = require('fs-extra')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress','config', `${path.parse(file).base}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const file = process.env.ENVIRONMENT || config.env.ENVIRONMENT || config.configFile || 'dev'
  return getConfigurationByFile(file)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}