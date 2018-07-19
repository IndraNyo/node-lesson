const express = require('express');
const qs = require('querystring');
const bodyParser = require('body-parser');

// 创建服务
const server = express();
server.listen(8800);

//获取数据GET、POST
// server.use(function (req, res, next) {
//     let str = '';
//     req.on('data', function (data) {
//         str += data;
//     });
//     req.on('end', function () {
//         req.body = qs.parse(str);
//         next();
//     });
// });

// bodyPaser
server.use(bodyParser.urlencoded({}));

server.use('/', function (req, res, next) {
    console.log(req.body);
    next();
})