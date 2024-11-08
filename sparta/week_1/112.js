function solution(absolutes, signs) {
    // retrun해야하는 answer 생성
    var answer = 0;

    // 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
    // 2-1. 두 배열은 크기가 같음
    for (var i = 0; i<absolutes. length; i++) {
        // 부호(+, -)에 따라서 처리
        if (signs[i] === true) {
            // 값이 true인 경우(양수)
            answer = answer + absolutes[i];
        } else if (signs[i] === false) {
            // 값이 false인 경우(음수)
            answer = answer - absolutes[i];
        }
    }

    // 3. 출력
    return answer;
}

var absolutes = [1,2,3];
var signs = [false,false,true]	;

console.log(solution(absolutes, signs));
// [1,2,3]	[false,false,true]	