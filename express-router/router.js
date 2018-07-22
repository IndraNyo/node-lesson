const express = require('express');

const server = express();


// 创建第一个路由
const routerUser = express.Router();

routerUser.get('/1.html', function (req, res) {
    res.send('user1')
})
routerUser.get('/2.html', function (req, res) {
    res.send('user2')
})
server.use('/user', routerUser);

// 创建第二个路由
const articleRouterUser = express.Router();

articleRouterUser.get('/a.html', function (req, res) {
    res.send('articleA')
})
articleRouterUser.get('/b.html', function (req, res) {
    res.send('articleB')
})
server.use('/article', articleRouterUser);


// 创建第二个路由的子路由
const articleDetails = express.Router();

articleDetails.get('/aaa.html', function (req, res) {
    res.send('ListAAA')
})

articleRouterUser.use('/list', articleDetails);
server.listen(8800);