const http = require('http');
// 3.2
const qs = require('querystring');
const urlApi = require('url');

// 3
const server = http.createServer(function (req, res) {
    let dataOjb = urlApi.parse(req.url, true);
    let goUrl = dataOjb.pathname;
    let list  = dataOjb.query;  

    // let list = {};
    // let url = '';
    // if (req.url.indexOf('?') !== -1) {
        // 3.1
        // let ulr = arr[0];
        // let arr2 = arr[1].split('&');
        // for (i = 0; i < arr2.length; i++) {
        //     let arr3 = arr2[i].split('=');
        //     list[arr3[0]] = arr3[1];
        // }
        // 3.2
        // list = qs.parse(arr[1])

    // }else {
    //     url = req.url;
    // }
    //console.log(url,list);

    console.log(goUrl,list)
    res.write('OK');
    res.end();
})



//监听
server.listen(8800)