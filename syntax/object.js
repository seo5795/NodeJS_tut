//배열 사용방식
var member = ['egoing', 'k8805', '아리'];
console.log(member[1]); //'k8805'
var i =0;
while(i<member.length){
    console.log(member[i]);
    i=i+1;
}


//객체 사용방식
var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : '아리'
}
console.log(roles.designer);//k8805
console.log(roles['designer']);//k8805

for(var id in roles){
    console.log('object => ', id, 'value => ', roles[id]);
}