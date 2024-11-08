// 두 수의 나눗셈
//정수 num1과 num2가 매개변수로 주어질 때
// num1을 num2로 나눈 값에 1,000을 곱한 후
// 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.


// 1. num1을 num2로 나누자.
// 2. 1000을 곱하기 전에 ! 정수 부분만 남기자.
// 3. 나눈 값에 1000을 곱하자.

// num1 / num2 * 1000
// num1 / num2 값에 정수부분만 남기기!

function solution(num1, num2) {
    var answer = Math.floor((num1 / num2) * 1000);
    return answer;
}