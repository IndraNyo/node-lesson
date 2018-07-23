const mySql = require('mysql');

// 1.连接
// createConnection(服务器 用户名 密码 库)

const db = mySql.createConnection({
    host: 'localhost',
    port: '3306', //默认3306可以不写
    user: 'root',
    password: 'sasasa',
    database: 'vue-chi'
});

// console.log(db);


// 2.查询
// query(行为，回调函数) 
// 增：INSERT 删：DELETE 改：UPDATE 查：SELECT

// INSERT INTO `user_table` (`ID`, `user_name`, `pass_word`) VALUES (0, 'Mute', '444444');
// SELECT * FROM user_table;
db.query(`SELECT * FROM user_table`, function (err, data) {
    if(err) {
        console.log(err)
    }else{
        console.log(JSON.stringify(data))
    }
});