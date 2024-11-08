//효율
var numbers = [10, 20, 3, 16, 45];
// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);
// console.log("apply =>", max, min);

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요

// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log(max, min);

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("spread =>", max, min);