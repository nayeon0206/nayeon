// ES6

// 2015년도 이전 => var를 썻다.
//(1) es6 => let(변수), const(상수)
// var는 선언을 다시 할 수 있지만 let과 const는 재선언 안됨
// let은 재할당 됨. const는 재할당 안됨
// let a = 1;
// a = 2; // let 재할당 가능, 재선언 불가
// const a = 1;
// a = 2; // const 재할당 안됨, 재선언 불가

//(2) arrow function 화살표 함수
// function add () {

// }

// var add = function() {

// }

// var add = () => {
//     return 1; // return문이 한줄일 경우 중괄호 생략 가능
// }

// var add = (x) => 1; // 매개변수있으면 소괄호도 생략 가능

// (3) 삼항 연산자
// condition ? true인 경우 : false 인 경우

// console.log(true ? '참' : '거짓');
// console.log(false ? '참' : '거짓');
// console.log(1 === 1 ? '참' : '거짓');
// console.log(1 !== 1 ? '참' : '거짓');