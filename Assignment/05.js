// 1. if else문 이용해서 만들기.

let num1 = 11;
let num2 = 3;

function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
};

// console.log(solution(num1, num2));
// 두 수가 같으면 1 다르면 -1을 return하도록 함수를 완성하기

// 2. 삼항 연산자를 이용하여 만들기

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
  };

//   console.log(solution(num1, num2));

// 삼항 연산자를 이용하면 더 깔끔하게 나타낼 수 있다.