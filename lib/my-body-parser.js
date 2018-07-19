const qs = require('querystring');

module.exports = function (){
    // return 后 函数必须要执行 +（）
    return function (req, res, next) {
        let str = '';
        req.on('data', function (data) {
            str += data;
        });
        req.on('end', function () {
            req.body = qs.parse(str);
            next();
        });
    };
}