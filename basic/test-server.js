const http = require('http');
const fs = require('fs')
const qs = require('querystring');
const urlApi = require('url');

// 5
const server = http.createServer(function (req, res) {
    //GET
    let dataObj = urlApi.parse(req.url, true);
    let url = dataObj.pathname;
    const getList = dataObj.query;
    //POST
    let str = ''
    req.on('data', function (data) {
        str += data;
    })
    req.on('end', function () {
        const postList = qs.parse(str);
        // console.log(url,getList,postList)
        
    })
    //file
    let file_name = './' + url;
    fs.readFile(file_name, function (err, data) {
        if(err) {
            console.log(file_name)
            res.write('404')
        }else {
            res.write(data);
        }
        res.end();
    })
})



//监听
server.listen(8800)