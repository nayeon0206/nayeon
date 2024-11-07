let num1 = 7
let num2 = 2

function solution(num1, num2) {
    var answer = parseInt(num1 / num2);
    return answer;
}

console.log(parseInt(num1 / num2));
// 몫 구하기

// 자바스크립트에는 몫을 구하는 방법이 몇개 있다.

// Math.floor(num1 / num2)
// parseInt(num1 / num2)
// ~~(num1 / num2); // ~ 는 tilde(~)는 주어진 숫자를 -(n+1)하게 되지만, double tilde(~~)는 양수일 경우 Math.floor()와 동일하게 소수점 이하를 내리고,
// 음수는 Math.ceil()과 동일하게 소수점 이하를 올린다.

// 코드의 가독성을 위해 double tilde(~~)보다 Math.floor를 사용하는 것을 권장한다고 한다.
// 실행 속도는 ~~ > Math.floor > pareInt 순 이라고 한다.
