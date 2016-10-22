const suman = require('suman');
const Test = suman.init(module, {});



Test.describe('1', {mode: 'series'}, function (example_dot_com,timeout) {

    //////////

    console.log('timeout =>',timeout);


    this.it.cb('one', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('two', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('three', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('four', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('five', t => {
        setTimeout(t.done, 1000);
    });

});


Test.describe('2', {mode: 'series'}, function (example_dot_com) {

    //////
    this.it.cb('one', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('two', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('three', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('four', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('five', t => {
        setTimeout(t.done, 1000);
    });

});

Test.describe('3', {mode: 'series'}, function (example_dot_com, timeout) {

    ////
    this.it.cb('one', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('two', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('three', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('four', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('five', t => {
        setTimeout(t.done, 1000);
    });

});

Test.describe('4', {mode: 'series'}, function (example_dot_com) {

    //////
    this.it.cb('one', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('two', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('three', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('four', t => {
        setTimeout(t.done, 1000);
    });

    this.it.cb('five', t => {
        setTimeout(t.done, 1000);
    });

});