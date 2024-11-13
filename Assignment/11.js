// 짝수와 홀수

function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        return answer = "Even"
    }else {
        return answer = "Odd"
    }
    return answer;
}

// 삼항 연산자를 이용한 풀이
function solution(num) {
    return (num % 2 === 0? "Even":"Odd")
}