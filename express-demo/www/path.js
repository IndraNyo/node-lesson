const path = require('path');

const str = 'F:\projectz\node-lesson\express-demo\www\a.html';

const obj = path.parse(str);

// base 文件名部分
// ext 扩展名
// dir 路径
// name 文件名部分

console.log(obj);