// require 引入
// module 模块
// exports 输出

// exports.a = 12

// 偷偷加一层
// (function (require, exports, module) {
//     exports.a = 12
// })();

// exports.a = 12
// exports.b = 32
module.exports = {
    a: 12,
    b: 3
};