var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
})
//결과: [ 'CSS', 'HTML', 'JavaScript' ]
//특정 디렉토리의 파일을 배열형태로 만들어 사용가능하게 해줌