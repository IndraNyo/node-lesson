const http = require('http');
const fs = require('fs')
const qs = require('querystring');
const urlApi = require('url');

let users = {};

const server = http.createServer(function (req, res) {
    //解析数据
    let srt = '';
    req.on('data', function (data) {
        str += data;
    })
    req.on('end', function () {
        const dataObj = urlApi.parse(req.url, true);
        const url = dataObj.pathname;
        const GET = dataObj.query;
        const POST = qs.parse(str);

        //接口or文件
        if(url=='/user') {
            switch(GET.act){
                case 'reg':
                    break;
                case 'login':
                    break;
                default:
                    res.write(`{"ok": false , "msg" : "未知接口调用"}`);
            }
        }else {
            //读取文件
            const file_name = './www' + url;
            fs.readFile(file_name, function (err,data) {
                if(err) {
                    res.write('404 NOT FOUND');
                }else {
                    res.write(data)
                }
            })
        }
    })
})

server.listen(8800);