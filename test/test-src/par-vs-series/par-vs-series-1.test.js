const suman = require('suman');
const Test = suman.init(module, {});



Test.describe('1', {mode: 'series'}, function () {

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