const express = require('express')

// 创建服务
const server = express();

// server.use('/a.html', function (req, res) {
//     res.send('/////');
//     res.end();
// });

// server.use('/b.html', function (req, res) {
//     res.send('aaa');
//     res.end();
// });

// server.get('/', function () {
//     console.log('GET')
// })

// server.post('/', function () {
//     console.log('POST')
// })

server.use('/', function () {
    console.log('USE')
})

server.listen(8800);