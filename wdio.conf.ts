import {Options} from "@wdio/types";


let headless = process.env.HEADLESS;
console.log(`>> The headless flag: ${headless}`);

export const config: Options.Testrunner = {
//export const config: WebdriverIO.Config = {
    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            args: headless?.toUpperCase() === 'Y' ? ['--headless','--disable-dev-shm-usage','--no-sandbox','--window-size=1920,1080','--disable-gpu'] : []
        },
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
    services: ['chromedriver', ['selenoid-standalone', { pathToBrowsersConfig: './browsers.json' }]],
    path: 'wd/hub',
    //services:['selenoid-standalone', { pathToBrowsersConfig: './browsers.json' }], // path relative to process.cwd()
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
