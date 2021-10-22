var fs = require('fs');

// //readFileSync: 동기적

// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');
//readFileSync: 리턴값이 있음


//readFile: 비동기적 동시에 처리
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
    //리턴값x
});
console.log('C');

//노드js의 성능을 끌어올리기 위해서는 비동기적 방식을 채택하는 것이 좋다