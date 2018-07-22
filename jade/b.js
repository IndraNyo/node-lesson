const jade = require('jade');
const fs = require('fs');

const str = jade.renderFile('./views/index.jade', {
    pretty: true,
    arr: ['aaa', 'fdadfa', 'fdaswqre', 'qeqwe', 'ghghgh'],
    content: '<h2>你大幅度拉双方均</h2><p>我打拉克丝对伐啦记得发</p>'
});

fs.writeFile('./build/index.html', str, function(err) {
    if(err)
        console.log('fail!')
    else
    console.log('done!')
})

console.log(str);