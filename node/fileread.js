var fs = require('fs');
fs.readFile('filesample.txt', 'utf8', function(err,data){
    console.log(data);
});