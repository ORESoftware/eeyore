const domain = require('domain');


process.on('uncaughtException', function (e) {
    console.log('uncaught exception 1 =>', e);
});

process.on('uncaughtException', function (e) {
    console.log('uncaught exception 2 =>', e);
});


var o = {};

o.doSomethingElse = function () {
    console.log('handled error and did something else');
};

o.throwError = function () {

    const d = domain.create();

    d.on('error',  (e) => {
        // console.log(' => Domain has caught exception =>', e);
        this.doSomethingElse();
    });


    d.run(function () {
        process.nextTick(function () {
            throw new Error('foo');
        });
    });


};

o.throwError();





