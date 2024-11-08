// 객체 // 밑의 방식처럼 선언한다.
// 중요!! key -value pair
// key에 할당되는 벨류에는 어떤 값도 올 수 있다. (제한이 없다.)
// key: 문자, 숫자, 불리언타입(true), 함수(function), 배열형태[], 객체{}
// 하나의 변수에 여러개의 값을 넣을 수 있다! < 장점

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name : "홍길동",
//     age : 30,
//     gender: "남자",
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
    name : "홍길동",
    age : 30,
    gender: "남자",
};

let keys = Object.keys(person);
// console.log("keys =>", keys)

// 3-2. values
let values = Object.values(person);
// console.log("values =>", values)

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
// console.log("entries =>", entries)

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender : "여자" });
// console.log("newPerson =>", newPerson);

// 3-5. 객체 비교
// 크기가 상당히 크다. -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// let person1 = {
//     name : "홍길동",
//     age : 30,
//     gender: "남자",
// };

// // person2 별도 공간에 대한 주소
// let person2 = {
//     name : "홍길동",
//     age : 30,
//     gender: "남자",
// };

//(string = 문자열)str1, str2는 직접 값을 저장해서 두개가 같다고 나온다.
let str1 = "aaa";
let str2 = "aaa";

// console.log("answer => ", person1 === person2);
// console.log("answer2 => ", str1 === str2);

//stringify = 주소화 되어있던 것을 문자열화를 시킨다.
// console.log(JSON.stringify(person1) === JSON.stringify(person2))

// 3-6. 객체 병합
let person1 = {
    name : "홍길동",
    age : 30,
};

let person2 = {
    gender: "남자",
};

// ...:spread operator = 중괄호를 없애고 객체를 풀어주는 명령어
let perfectMan = {...person1, ...person2};
console.log(perfectMan)