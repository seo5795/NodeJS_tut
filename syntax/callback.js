// function a(){
//     console.log('a');
// }

//익명함수--> 자바스크립트에서 함수는 값이다
var a = function(){
    console.log('a');
}


function slowfunc(callback){
    callback();
}

slowfunc(a);