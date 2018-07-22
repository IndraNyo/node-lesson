const ejs = require('ejs');

ejs.renderFile('./views/3.ejs', {
    json: { 
        arr: [
            {user: 'fiona', pass: '123123'},
            {user: 'Rook', pass: '12314535323'},
            {user: 'Ash', pass: '43'},
            {user: 'Finka', pass: '1231dfc23'},
            {user: 'jagaur', pass: '1231df23'},
            {user: 'bili', pass: '1231sfds23'}
        ]
    },
    type: 'admin'
},
function(err,data){
    console.log(data);
});