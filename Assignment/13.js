//자릿수 더하기

function solution(n)
{
    var answer = 0;
    var m = String(n);
    // 각 자릿수를 더해주기 위해 숫자인 n의 type을 string으로 바꾸기
    
    for ( let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
        // parseInt ? 문자열에 포함된 숫자를 찾아서 number로 형변환 시켜준다.
    }
    return answer;
}
