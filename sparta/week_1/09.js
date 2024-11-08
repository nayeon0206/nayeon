// 스코프, 전역변수, 지역변수, 화살표함수
// 3. 지역변수 : 함수 내에서만 영향을 끼친다.
function printX() {
    let x = 10; // 변수
    console.log(x);
}

console.log(x); // 적용될 변수가 없어서 오류가 난다.
printX();