//**************************************************************************************************
//  Suman config file, should always remain at the root of your project
// *************************************************************************************************


const os = require('os');
const path = require('path');

// let's get bizzy
const numOfCPUs = os.cpus().length || 1;


//
module.exports = Object.freeze({

    matchAny: [/\.test\.js$/],                              //recommended =>  match: [/.test.js$/],
    matchNone: [/fixture/],                  //matches any, matchesNoneOf
    // matchAny: ['.test.js'],                              //recommended =>  match: [/.test.js$/],
    // matchNone: ['fixture'],
    matchAll: [],
    sumanHelpersDir: 'test/_suman',
    testDir: 'test',
    testSrcDir: 'test/test-src',
    testTargetDir: 'test/TEST-TARGET',
    // testSrcDir: 'test',
    // testTargetDir: 'TEST-TARGET',
    defaultHookTimeout: 5000,
    defaultTestCaseTimeout: 5000,
    executeRunnerCWDAtTestFile: true,
    runnerLock: true,
    transpile: true,                         //default, can be overridden with command line
    timeoutToSearchForAvailServer: 2000,
    sendStderrToSumanErrLogOnly: true,
    useSuiteNameInTestCaseOutput: false,
    defaultDelayFunctionTimeout: 8000,
    warningLevel: 3,
    noFrills: false,
    defaultTestSuiteTimeout: 15000,
    maxParallelProcesses: Math.max(6, numOfCPUs),           //maximum parallel processes running at one time, synonymous with --concurrency cmd line option
    ultraSafe: false,                   //if true, Suman reads files before executing any supposed test file and makes sure it's a suman test before running
    verbose: true,                      //handles and logs warnings (using warning level?)
    checkMemoryUsage: false,            //limits stack traces to just relevant test case or test line
    fullStackTraces: false,             //allows you to view more than 3 lines for errors in test cases and hooks
    uniqueAppName: 'suman',
    NODE_ENV: 'development',            // NODE_ENV to use if you don't specify one
    browser: 'Firefox',                 // browser to open test results with
    disableAutoOpen: false,             // use true if you never want suman to automatically open the browser to the latest test results
    expireResultsAfter: '10000000',     // test results will be deleted after this amount of time
    resultsCapCount: 100,               // test results will be deleted if they are 101st oldest run
    suppressRunnerOutput: true,         // this defaults to true, use no-silent or silent to switch value
    resultsCapSize: 7000, // 3 gb's     // oldest test results will be deleted if the results dir expands beyond this size

    reporters: {
        'tap': 'suman/reporters/tap'
    },

    servers: {                           // list of servers to output test result data to, with the os.hostname() as the key

        '*default': {
            host: '127.0.0.1',
            port: 6969
        },

        '###': {   /// replace this with user's local machines os.hostname()
            host: '127.0.0.1',
            port: 6969
        },

    },

    useBabelRegister: false,
    babelRegisterOpts: {

        // Optional ignore regex - if any filenames match this regex then they
        // aren't compiled.
        ignore: /fixture/,

        // Ignore can also be specified as a function.
        // ignore: function(filename) {
        // 	if (filename === '/path/to/es6-file.js') {
        // 		return false;
        // 	} else {
        // 		return true;
        // 	}
        // },

        // Optional only regex - if any filenames *don't* match this regex then they
        // aren't compiled
        // only: /my_es6_folder/,

        // Setting this will remove the currently hooked extensions of .es6, `.es`, `.jsx`
        // and .js so you'll have to add them back if you want them to be used again.
        extensions: ['.es6', '.es', '.jsx', '.js']
    }

});