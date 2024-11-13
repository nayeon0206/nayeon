// 배열의 평균값

function solution(numbers) {
    let sum = 0;
    for (let i =0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let answer = sum / numbers.length;
    return answer;
}

// 참고할 풀이
// 배열의 합계와 평균을 구하는 방법 reduce()

function solution(numbers) {
    let answer = numbers.reduce((a,b)=> a+b,0)/numbers.length
    return answer;
}