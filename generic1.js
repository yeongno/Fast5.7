"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
//더 많은 반복된 함수들...
function hello(message) {
    return message;
}
console.log(hello('Mark').length);
console.log(hello(39).length);
function helloGeneric(message) {
    //인자로 받은 T를 기억을 하게 된다 만약 'Mark'를 받으면 string으로 39를 받으면 number로 바뀌는 거다
    return message;
}
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
