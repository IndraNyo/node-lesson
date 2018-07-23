const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mySql = require('mysql');

const ejs = require('ejs');

const server = express();

// 连接到数据库 用连接池提高性能
const db = mySql.createPool({
    host: 'localhost',
    port: '3306', //默认3306可以不写
    user: 'root',
    password: 'sasasa',
    database: 'vue-chi'
});

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
    maxAge: 30 * 3600 * 1000
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
server.set('views', './templates');
// 那种模板
server.engine('html', consolidate.ejs);

// 用户请求

server.get('/', (req, res, next) => {
    // 查询banner
    db.query(`SELECT * FROM banner_table`, (err, data) => {
        if (err) {
            res.status(500).send('database error banner').end();
        } else {
            res.banners = data; // 传递数据给下一个查询 直到最后渲染 靠next()同步操作 这是express最傻的地方
            next();
        }
    });
});


server.get('/', (req, res, next) => {
    // 查询新闻
    db.query(`SELECT ID,title,description FROM article_table`, (err, data) => {
        if (err) {
            res.status(500).send('database error article').end();
        } else {
            res.articles = data;
            next();
        }
    })
});

server.get('/', (req, res) => {
    res.render('list.ejs', {
        banners: res.banners,
        articles: res.articles
    });
})

server.get('/article', (req, res) => {
    // 用query取get的值
    if (req.query.id) {
        db.query(`SELECT * FROM article_table WHERE ID = ${req.query.id}`, (err, data) => {
            if (err) {
                res.status(500).send('database error article').end();
            } else {
                if (data.length == 0) {
                    res.status(404).send('文章不存在').end();
                } else {
                    // let articleData = data[0]

                    res.render('details.ejs', {
                        article_data: data[0]
                    });
                }
            }
        })
    } else {
        res.status(404).send('你请求的文章找不到').end();
    }
})


// static 数据
server.use(static('./www'))