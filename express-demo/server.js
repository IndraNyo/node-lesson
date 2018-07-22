const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');

const ejs = require('ejs');
const jade = require('jade');

const server = express();

server.listen(8800);

// 解析cookie
server.use(cookieParser('zxcAv88zadflkj#*$&!$@'))

// 使用session
const keysArr = [];
for (let i = 0; i < 10000; i++) {
    keysArr.push('keys_' + Math.random())
}
server.use(cookieSession({
    name: 'Indra_s_id',
    keys: keysArr,
    maxAge: 30*3600*1000
}));


// post数据
server.use(bodyParser.urlencoded({
    extends: false
}))

server.use(multer({
    dest: './www/upload'
}).any());

// 配置模板引擎

// 模板输出
server.set('view engine', 'html');
// 模板文件地址
server.set('views', './views');
// 那种模板
server.engine('html', consolidate.ejs);

// 用户请求
server.get('/index', function (req, res) {
    res.render('1.ejs', { name: 'fiona'});
    // 检查session 是否登录
    // if(req.session.userid){
    //     res.render('1.ejs', { name: 'fiona'});
    // }else{
    //     res.render('login.ejs', {});
    // }
})

// static 数据
server.use(static('./www'))