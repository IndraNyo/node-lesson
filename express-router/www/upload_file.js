const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

const server = express();

// 错误 body paser 无法解析multipart/form-data，只能解析application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({
//     extended: false
// }));
// server.post('/', function (req, res) {
//     console.log(req.body)
// })


// 使用Multer 创建实例
const objMulter = multer({
    // buffer 占用内存 介于性能 不要直接写入 使用dest直接写入硬盘
    dest: './upload' 
});

server.use(objMulter.any());

server.post('/', function (req, res) {
    // body是值 上传文件用files 如果是single 用file
    // console.log(req.files[0].originalname)

    // 获取原来的文件名并修改--path
    console.log(req.files[0])

    let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    // 重写文件--fs
    fs.rename(req.files[0].path, newName, function (err) {
        if(err){
            res.send('上传失败')
        }
        else{
            res.send('上传成功')
        }
    })
});

server.listen(8800);