const ejs = require('ejs');

ejs.renderFile('./views/1.ejs', {
    name: 'Fiona'
}, function (err, data) {
    if (err) 
        console.log('errrrrrr')
     else 
        console.log(data);
    
});