//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'e2e/teacher/teacher.e2e.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

    //seleniumAddress: 'http://localhost:4444/wd/hub',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

    browserConsoleLogOptions: {
        terminal: true,
        level: ""
    }

};