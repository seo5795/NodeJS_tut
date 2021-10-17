var args = process.argv;
console.log(args[2]);
//args배열의 0항에는 nodejs파일의 경로가, 1항에는 현재 파일의 경로가 들어가고 2항부터 입력값이 들어간다
console.log('a');
console.log('b');
if(args[2] === '1'){
    console.log('c1');
}
else{
    console.log('c2');
}
console.log('d')