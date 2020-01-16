var jsonConcat = require('json-concat');
jsonConcat({
src: 'jsonserver/data',
dest: 'jsonserver/db.json',
}, function(json){
console.log(json);
});