var n = null;
console.log(typeof n); // object // 자바스크립트 오류

//동등연산자(equality operator) // type까지는 일치하지 않아도 된다.
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined);
console.log(n === null);