// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
  
  mutate: ["./index.js"],
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],

  BASE_URL: "https://dashboard.stryker-mutator.io for production, https://stryker-dashboard-acceptance.azurewebsites.net/" ,
  PROJECT: "https://github.com/JoranManoel/mutation-test/",
  VERSION: "main",
  API_KEY: "f023902a-28d8-4863-bef3-72402f010a8d",

  testRunner: "jest",
  coverageAnalysis: "perTest",
  
  BASE_URL: "https://dashboard.stryker-mutator.io for production, https://stryker-dashboard-acceptance.azurewebsites.net/" ,
  PROJECT: "https://github.com/JoranManoel/mutation-test/",
  VERSION: "main",
  API_KEY: "f023902a-28d8-4863-bef3-72402f010a8d",
};
export default config;
