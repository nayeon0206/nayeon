function solution(strings, n) {
    var answer = [];

    // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
    for (var i=0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
        // car -> a + car -> acar
    }

    // 2. 해당 배열을 사전순으로 정렬(sort)
    strings.sort();


    // 3. 앞글자 제거 후 리턴
    for (var j=0; j<strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j]);
    }

    return answer;
}

// solution(["sun", "bed", "car"],	1);