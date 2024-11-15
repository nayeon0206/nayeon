//나머지가 1이 되는 수 찾기
//자연수 n이 매개변수
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수

function solution(n) {
    let answer = 0;
    for (let x = 1; x < n; x++) {
        if (n % x === 1) {
            answer = x;
            break;
        }
        
    }
    return answer;
}

// n을 x로 나눈 나머지가 1이 되는 가장 작은 x를 찾아야 한다.
// x의 범위를 1이상 n미만으로 잡은 뒤
//for반복문을 돌려 가장 작은 x를 찾으면 break으로 for반복문을 멈춘다.