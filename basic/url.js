const urlApi = require('url');

const myUrl = urlApi.parse('http://www.abc.com/form.index?user=Fiona&pass=123421321&age=18', true)
console.log (myUrl.pathname, myUrl.query)
