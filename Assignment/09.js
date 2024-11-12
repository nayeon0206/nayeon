//짝수의 합
// n이하의 짝수를 모두 더한 값을 return
// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

const solution = n => {
    let result = 0;
    for(let i = 2; i <= n; i+=2) {
          result += i;
    }
    return result;
  }

