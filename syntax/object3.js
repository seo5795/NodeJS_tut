
var o = {
    v1:'v1',
    v2:'v2',
    f1:function (){
        console.log(this.v1);
    },
    f2:function (){
        console.log(this.v2);
    }
}

//this: 함수내에서 약속된 값을 통해서 객체를 참조할 수 있게 됨
//함수명을 바꾸어도 문제없이 사용할 수 있음.


o.f1();
o.f2();