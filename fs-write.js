const fs = require('fs')

// writeFile(文件名(不存在就创建)，内容，回调)
fs.writeFile('text2.txt', 'aaaaaaaaa', function (error) {
        console.log(error)

});