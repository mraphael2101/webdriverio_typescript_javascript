import {Options} from "@wdio/types";

export const config: Options.Testrunner = {
//export const config: WebdriverIO.Config = {
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
    }],
    cucumberOpts: {
        require: ['./test/**/*.ts'],
        strict: false,
        dryRun: false,
    },
    specs: [
        './test/**/*.feature'
    ],
    services: ['chromedriver'],
    baseUrl: 'http://www.google.com',
    framework: 'cucumber',
    waitforTimeout: 10000,
    //reporters:['spec',['allure', {outputDir: 'allure-results'}]],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
}
