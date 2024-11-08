// 일급객체로서의 함수

// (1) 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
// const sayHello = function() {
//     console.log('Hello');
// }

// (2) 함수를 인자로 다른 함수에 전달할 수가 있다.
// (2)-1. 콜백함수 : 매개변수로써 쓰이는 함수
// (2)-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
// function callFunction(func) {
//   // 매개변수로 받은 변수가 사실, 함수다.
//   func();
// }

// const sayHello = function () {
//   console.log("Hello");
// };


// callFunction(sayHello);

// (3) 함수를 반환할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = createAdder(5);
//createAdder(5); 는
// function (x) {
//    return x + 5;
// }; 의 값과 같다.
console.log(addFive(10));