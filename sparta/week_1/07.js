// 함수 = function (기능)
// input, output

// 1. 함수 선언문
// function(키워드) add(함수 이름) (매개변수) {
//     // 함수 내부에서 실행할 로직 (메인로직이 들어가는 부분)
// }

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
    return x + y;
};

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y
};

// 함수를 호출한다. (= 사용한다)
// 함수명() -> add(입력값)
//console.log(add(2, 3));

// let functionResult = add(3, 4);
// console.log(functionResult);

//add2를 가지고 10과 20을 더한 값을 출력해보세요.
let functionResult2 = add2(10, 20);
console.log(functionResult2);

// input : 함수의 input -> 매개변수 (매개체가 되는 변수)
// output: return문 뒤에 오는 값 : 변환값