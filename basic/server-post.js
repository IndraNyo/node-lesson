const http = require('http');
const qs = require('querystring');


// 4
const server = http.createServer(function (req, res) {
    let str = '';
    let i = 0;
    // 有一段数据到达 （发生多次）
    req.on('data', function (data) {
        console.log(`第${i++}次`);
        str += data;
    });
    // 数据全部到达 （发生一次）
    req.on('end', function () {
        let postData = qs.parse(str)
        console.log(postData);
    });
    // res.write('I am OK');
    // res.end();
})



//监听
server.listen(8800)