// 평균 구하기

// 배열의 평균 구하는 것과 같음

function solution(numbers) {
    let sum = 0;
    for (let i =0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let answer = sum / numbers.length;
    return answer;
}

function solution(numbers) {
    let answer = numbers.reduce((a,b)=> a+b,0)/numbers.length
    return answer;
}