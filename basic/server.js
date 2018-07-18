const http = require('http')
const fs = require('fs')

// 1
// const server = http.createServer(function (request, response) {
//     console.log(request.url);
//     switch(request.url) {
//         case '/index.html':
//             response.write('index');
//             break;
//         case '/index2.html':
//             response.write('index2');
//             break;
//     }
//     response.end();
// })


// 2
const server = http.createServer(function (req, res) {
    let file_name = './dist' + req.url;
    fs.readFile(file_name, function (err,data) {
        if(err) {
            res.write('404')
        }else {
            res.write(data)
            
        }
        res.end();
    })
})

//监听
server.listen(8800)