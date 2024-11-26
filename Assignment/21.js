
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수

// x	return
// 10	true
// 12	true
// 11	false
// 13	false

function solution(x) {
    // sum 이라는 변수 설정
    let sum = 0;
    // 입력받는 정수 x를 string(x)로 문자열 형변환, split으로 한글자씩 나누고 arr라는 배열에 대입
    let arr = String(x).split("");
    //arr의 인덱스 하나씩 올려주면서 각 원소들을 sum에 더해준다.
    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    // x를 sum으로 나눈 나머지가 0이면 true, false가 반환되는 삼항연산자를 써서 마무리하기
    return (x % sum == 0) ? true : false;
}