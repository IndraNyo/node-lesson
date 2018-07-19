const express = require('express');
const static = require('express-static');

// 创建服务
const server = express();

server.listen(8800);

// 用户数据 全局变量

let users = {
    'fiona': '123123',
    'aaa': 'aaaaaa',
    'bbb': 'bbbbbb',
}

// 请求处理
server.get('/login', function (req, res) {
    
    let user = req.query['user'];
    let pass = req.query['pass'];

    if(users[user] == undefined) {
        res.send({ok: false, msg: '此用户不存在'});
    }else {
        if(users[user] != pass) {
            res.send({ok: false, msg: '密码错误'});
        }else{
            res.send({ok: true, msg: '登录成功'});
        }
    }
})

// 读取文件 express-static 顺序很重要
server.use(static('./www'));