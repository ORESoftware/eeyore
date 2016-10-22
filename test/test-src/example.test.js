
const suman = require('suman');
const Test = suman.init(module, {});


const promiseTimeout = function (t) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 1000);
    });
};

///////
Test.describe(__filename, {}, function (assert) {

    this.before(t => {
         console.log('before a');
    });

    this.beforeEach(t => {
        t.data.bar = 'foo';
        console.log('t.value:', t.value);
    });

    this.it('another one bites the dust', {value: 5}, t => {
        console.log('data:', t.data);
        console.log('developer debugging logs');
    });

    this.beforeEach.cb(t => {
        console.log('before each starting...');
        setTimeout(function(){
            console.log('before each hook finished.');
            t.ctn();
        },1000);
    });

    this.it('a', t => {
        assert(true);
        return promiseTimeout(t);
    });


    this.after(t => {
        console.log('after a');
    });


    this.describe('nested group 1', function () {

        this.before(t => {
            console.log('before b');
        });

        this.it('b', t => {
            assert(true);
        });


        this.after(t => {
            console.log('after b');
        });


        this.describe('nested group 2', function () {

            this.before(t => {
                console.log('before c & d');
            });

            this.beforeEach(t => {
                console.log('before each of c & d');
            });

            this.it('c', t => {
                assert(true);
            });


            this.it('d', t => {
                assert(true);
            });


            this.after(t => {
                console.log('after c & d');
            });

        });


    });


});