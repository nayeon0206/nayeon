function solution(s) {
    var answer = true;

    // 1. 대문자로 통일
    s = s.toUpperCase();

    // 2. for문을 통해서 문자열의 요소 하나하나씩을 비교
    // 2-1. p,y와 비교
    var num = 0;

    for (var i=0; i < s. length; i++ ){
        //여기에서 비교
        if(s[i] === 'P') {
            num++;
        }
        if(s[i] === 'Y') {
            num--;
        }
    }
    // 3. 개수체크(p와 y의 개수가 같은지를 체크)
    if(num === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}
var str1 = "pPoooyY";
var str2 = "Pyy";

console.log(solution(str2));