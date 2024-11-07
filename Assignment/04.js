let age = 23;

function solution(age) {
    var answer = 2022 - age + 1;
    return answer;
}

console.log(answer= 2022 - age + 1);
// 2022년 기준 40살 -> 1983년생
// 2022년 기준 23살 -> 2000년생
// 나이는 태어난 연도에 1살이며 매년 1월 1일마다 1살씩 증가합니다.
// 2022년 기준 선생님의 나이가 주어질 때
// 선생님의 출생 연도를 return하는 solution함수 

// 2022년 기준으로 잡고, age를 넣고, '매년 1월 1일마다 1살씩 증가'한다고 했으니 +1을 해주면 된다.