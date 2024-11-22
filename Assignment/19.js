// 정수 제곱근 판별

//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

//정수 n이 양의 정수 x의 제곱이면 x+1의 제곱을 리턴,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴

function solution(n) { 
    
    // i를 1부터 n까지 증가시켜줍니다.
    for (let i = 1; i <= n; i++) {
        // if문으로 i 와 i 를 곱했을 때 정확히 n이 되는 i 값을 구해줍니다.
        if (i * i === n) {
            // i 와 i 가 곱해졌을 때 n이 된다면 아래의 식을 실행하여 답을 제출
            return (i + 1) * (i + 1);
        }
    }

    // 그게 아니라면 -1을 제출
    return -1;
}

// 또 다른 풀이
function solution(n) {
    var answer = 0;
    let a = 0;

    // for 문으로 i 와 a 의 값을 0으로 선언해준 뒤, i 를 n만큼 증가시켜줍니다.
    for(let i=0; i<=n; i++){

        // 만약 n / i 가 i 와 완벽하게 같다면 a 에 i + 1 의 값을 대입해주고, 대입된 a 를 a * a 하여 답으로 제출
        if(n/i===i){
        a = i + 1
        return a*a
        // 그게 아니라면 answer에 -1을 대입해줍니다.
        } else {
        answer = -1
        }
    }

    return answer;
}