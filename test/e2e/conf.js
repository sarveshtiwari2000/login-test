global.fs = require('../../node_modules/node-fs/lib/fs.js');
var Jasmine2HtmlReporter = require('../../node_modules/protractor-jasmine2-html-reporter');
var jasmine2SpecReporter = require('../../node_modules/jasmine-spec-reporter').SpecReporter;
var d = new Date();

var testOutput = new Jasmine2HtmlReporter( {
savePath: 'test-output',
filePrefix: d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate() + "Test_Report.html",
takeScreenshots: false,
takeScreenshotsOnlyOnFailures: true,
fixedScreenshotName: false,
consolidate: true,
consolidateAll: true
} );
exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['userRegisterLogin-spec.js'],
  capabilities: {
  'browserName': 'chrome'
},
params: {
  username: '',
  password: '',
  firstname: ''
},

rootElement: '[ng-app="app"]',
allScriptsTimeout: 120000,
getPageTimeout: 120000,

jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 120000
},

 onPrepare: function() {
var baseURL = 'http://localhost:8080';
browser.driver.get(baseURL);
// Add HTML Reporter
jasmine.getEnv().addReporter(new jasmine2SpecReporter({displayStacktrace:'all'}));
//  jasEnv = jasmine.getEnv();
jasmine.getEnv().addReporter(testOutput);
 }
}
