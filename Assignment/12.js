// 평균 구하기

function solution(numbers) {
    let sum = 0;
    for (let i =0; i < numbers; i++) {
        sum += numbers[i]
    }
    let answer = sum / numbers;
    return answer;
}