// 단축 속성명 : property shorthand
// 정말 많이 쓰는 코드, 헷갈릴 수 있는 코드
const name = "nbc";
const age = "30";

// key - value pair
const obj = {name, age};
const obj1 = {name: name, age: age};
// 오른쪽이 실질적 데이터, 왼쪽은 그냥 이름 
// key - value가 같으면 생략 가능 // 배열같아보일 수 있지만 객체다

//전개 구문 = spread operator (...)
// destructuring과 함께 가장 많이 사용되는 es6 문법중 하나
// let arr = [1, 2, 3];

// // 원래 있던 구조와 다르게 새로운 구조를 만들 때 씀
// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);

// 객체
// let user = {
//     name: 'nbc',
//     age: 30
// };
// let user2 = { ...user};

// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest parameter) // args (arguments)의 약자
function exampleFunc (a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args);
};

// exampleFunc(1,2,3,4,5,6,7);

//템플릿 리터럴 (Template Literal) (`~~ ${}`)백틱 따옴표랑 기능은 같음// 엄청 많이 사용!!!
//추가기능 : JavaScript 코드(${}), 변수, 연산 들어갈 수 있음
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`);
console.log(`
    Hello 
        My name is Javascript!!

        Nice to meet you!
    `)