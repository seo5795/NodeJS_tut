//함수는 값이 될 수 있어서 변수안에 담을 수 있다.

var f = function(){
    console.log(1+1);
    console.log(1+2);
}

//배열의 원소로서 함수가 존재 할 수 있음
var a = [f];
a[0]();


//객체에 함수를 담을 수 있다
var o ={
    func:f
}
o.func();