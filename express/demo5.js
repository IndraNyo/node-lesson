//引入自己的 bodyParser

const express = require('express');
const myBody = require('../lib/my-body-parser');

// 创建服务
const server = express();
server.listen(8800);

server.use(myBody());

server.use('/', function (req, res, next) {
    console.log(req.body);
    next();
})