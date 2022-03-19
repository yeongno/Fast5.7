"use strict";
function helloBasic(message, comment) {
    console.log(message);
    console.log(comment);
    return message;
}
helloBasic("Mark", 39); //<string>형식으로 넣고 사용하면 뒤에 인자에 제한을 주는거다
helloBasic(36, 21); //<number>를 안 넣고 사용하게 되면 <T>가 알아서 추론 된다.
