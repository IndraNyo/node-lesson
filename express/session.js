const express = require('express');
const cookieParser = require('cookie-Parser')
const cookieSession = require('cookie-session')

const server = express();

let arrKeys = [];
for (let i = 0; i < 1000; i++) {
    arrKeys.push('sig_' + Math.random());
}

server.use(cookieParser());

server.use(cookieSession({
    name: 'sess',
    // keys: ['aaa', 'bbb', 'ccc'],
    keys: arrKeys,
    maxAge: 2 * 3600 * 1000
}));

server.use('/', function (req, res) {
    if (req.session['count'] == undefined) {
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }
    console.log(req.session)
    // 删除session
    // delete req.session
    res.send('ok');
})


server.listen(8800);