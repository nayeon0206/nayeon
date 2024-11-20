// 문자열을 정수로 바꾸기

function solution(s) {
    return Number(s);
}

//스트링을 number로 바꿔주는 Number메소드를 사용

function solution(s){
    return  +s; // 또는 s/1
}

// 자바스크립트의 특징 중 하나로, 문자열을 숫자 연산자와 함께 사용하게 되면 자바스크립트가 계산을 하기 위해서 자동으로
// 문자열을 숫자로 바꾸어주기 때문에 위와 같이 풀 수 있다.