const suman = require('suman');
const Test = suman.init(module, {});


Test.describe(__filename, {}, function (assert, request, nextPort) {


    const port = nextPort();
    const port2= nextPort();
    console.log(port2);


});