const http = require('http');
const fs = require('fs')
const qs = require('querystring');
const urlApi = require('url');

var users = {};

const server = http.createServer(function (req, res) {
    //解析数据
    let str = '';
    req.on('data', function (data) {
        str += data;
    })
    req.on('end', function () {
        const dataObj = urlApi.parse(req.url, true);
        const url = dataObj.pathname;
        const GET = dataObj.query;
        const POST = qs.parse(str);
        //接口or文件
        if (url == '/user') {
            switch (GET.act) {
                case 'reg':
                    //1.1 检查用户是否已经存在;
                    
                    if (users[GET.user]) {
                        res.write(`{"ok": false , "msg" : "用户已存在"}`);
                    } else {
                        //1.2. 插入users
                        users[GET.user] = GET.pass
                        res.write(`{"ok": true , "msg" : "注册成功"}`);
                    }
                    break;
                case 'login':
                    //2.1 检查用户是否已经存在;
                    if (users[GET.user] == undefined) {
                        res.write(`{"ok": false , "msg" : "此用户不存在"}`);
                    } else if (users[GET.user] != GET.pass) {
                        //2.2. 判断密码
                        users[GET.user] = GET.pass
                        res.write(`{"ok": false , "msg" : "密码错误"}`);
                    } else {
                        res.write(`{"ok": true , "msg" : "登录成功"}`);
                    }
                    break;
                default:
                    res.write(`{"ok": false , "msg" : "未知接口调用"}`);
            }
            res.end();
        } else {
            //读取文件
            let file_name = './www' + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404 NOT FOUND');
                } else {
                    res.write(data)
                }
                console.log(file_name)
                res.end();
            })
        }
    })
})

server.listen(8800);