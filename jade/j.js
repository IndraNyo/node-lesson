const jade = require('jade');

const str = jade.renderFile('./views/1.jade', {
    pretty: true
});

console.log(str);