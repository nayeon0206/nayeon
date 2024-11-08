// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push // 배열에 없던 요소를 추가
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.push("오렌지");
// console.log("2 => ",fruits);

// 3-2. pop // 배열에 있던 마지막 요소가 삭제
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);
// fruits.pop();
// console.log("2 => ", fruits);

// 3-3. shift // 배열 맨 앞에 있는 요소가 삭제
// let fruits = ["사과", "바나나","키위"];
// console.log("1 => ", fruits);
// fruits.shift();
// console.log("2 => ", fruits);

// 3-4. unshift // 맨 앞에 어떤 요소를 추가
// fruits.unshift("포도")
// console.log(fruits);

//3-5 splice (시작범위, 끝범위, "어떤 요소") 요소의 범위를 지정하여 "삭제"하고 그 범위에 다른 요소를 넣음
// let fruits = ["사과", "바나나","키위"];
// fruits.splice(1, 1, "포도");
// console.log(fruits);

//3-6. slice (시작 범위, 끝 범위) 지정하면 원본 배열에서 특정 범위의 요소를 "잘라내서" 새로운 배열로 만듦
// let fruits = ["사과", "바나나","키위"];
// let slicedFruites = fruits.slice(0, 2);
// console.log(slicedFruites);

// (1) forEach, map filter, find
// let numbers = [4, 1, 3, 2, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item){
//     console.log('item입니다 => ' + item);
// });

// (2) map : 기존에 있던 배열을 가공해서 새로운 배열을 생산해내는 함수
// 항상 원본 배열의 길이만큼이 return 된다.
// let newnumbers = numbers.map(function(item){
//     return item * 2;
// });

// console.log(newnumbers)

// let numbers = [4, 1, 3, 2, 5];

// (3) filter 
// let filterednumbers = numbers.filter(function(item){
//     return item > 3;
// })

// console.log(filterednumbers);

// (4) find 첫번째로 조건에 맞는 것만 반환을 한다.
let numbers = [4, 1, 3, 2, 5];

let result = numbers.find(function(item){
    return item > 3;
})

console.log(result);