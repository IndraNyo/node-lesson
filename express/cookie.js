const express = require('express');
const cookieParser = require('cookie-Parser')

const server = express();

server.use(cookieParser('difuaow812'));

server.use('/', function (req, res) {
    // 设置一个月的cookie
    // res.cookie('user', 'fiona', { path: '/', maxAge: 30*24*3600*1000});

    // cookie签名
    req.secret = 'difuaow812' // cookieParser 加签名后 自动对secret复制 这一步不需要
    res.cookie('user', 'fiona', { 
        signed: true
    });
    console.log(req.signedCookies)
    console.log(req.cookies)

    // 删除cookie
    // res.clearCookie('user');
    res.send('ok');
})


server.listen(8800);