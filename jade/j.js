const jade = require('jade');

const str = jade.renderFile('./views/4.jade', {
    pretty: true,
    arr: ['aaa', 'fdadfa', 'fdaswqre', 'qeqwe', 'ghghgh'],
    content: '<h2>你大幅度拉双方均</h2><p>我打拉克丝对伐啦记得发</p>'
});

console.log(str);