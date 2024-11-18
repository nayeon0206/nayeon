// x 만큼 간격이 있는 n개의 숫자
// 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
      answer.push(x * i);
    }
    return answer;
  }
// x 가 2, n이 5 일때 [2,4,6,8,10]
// x 가 4, n이 3일때 [4, 8, 12]
// x의 배수인 것을 알 수 있다.
  
// 다른 문제 풀이

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

//n 크기의 배열을 만들고, x로 이 배열을 채운 뒤, 배열의 각 요소에 콜백 함수를 실행하는 .map을 이용
// map을 사용할 때 2개의 input 값을 사용하게 되면 2번째 input 값은 배열의 index의 값을 의미함
