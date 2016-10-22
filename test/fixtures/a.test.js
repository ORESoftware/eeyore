
const suman = require('suman');
const Test = suman.init(module);


Test.describe('SimpleTest-A', {}, function (assert, fs, http, os) {

    throw new Error('This should never be run because it is in /fixtures/ dir.');

});
