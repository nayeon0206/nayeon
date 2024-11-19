// 자연수 뒤집어 배열로 만들기

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴

function solution(n) {
    var arr = n.toString().split('');
  // n을 string으로 형변환하고 split으로 하나씩 끊어줌.
    var answer = [];

    for(var i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }
  //arr의 인덱스 역순으로 answer의 배열 안에 넣어준다.
  return answer;
}

function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}
//map() 메소드로 i => parseInt(i) 를 사용하여 모든 요소들을 정수로 다시 변환합니다.

function solution(n) {
    return String(n).split('').reverse().map(Number)
}

const solution = (n) => n.toString().split("").map((str) => Number(str)).reverse();
