//链式操作
const express = require('express');
const bodyParser = require('body-parser');

// 创建服务
const server = express();
server.listen(8800);

server.use('/', function (req, res, next) {
    console.log('a');
    next();
});

server.use('/', function (req, res) {
    console.log('b');
});