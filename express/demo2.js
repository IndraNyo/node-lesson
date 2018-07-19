const express = require('express');
const bodyParser = require('body-parser');

// 创建服务
const server = express();
server.listen(8800);

server.use(bodyParser.urlencoded({}));

//获取数据GET、POST
server.use('/', function (req, res) {
    console.log(req.body)
})