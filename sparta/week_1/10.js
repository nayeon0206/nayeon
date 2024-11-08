// 화살표 함수
// ES6 신 문법
//익숙하지 않을 때는 function 키워드를 사용해 정석적으로 쓰는게 좋다.
function add() {
    return x + y
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y
}

// 1-2 한 줄로도 쓸 수 있다. (return문을 뺄 수 있는 조건 = 중괄호 안에 있는 줄이 한 줄이면 가능)
let arrowFunc02 = (x, y) => x + y //한 줄로 쓸때는 중괄호는 써도되지만 한줄이고, return문일때 생략 가능

//
function testFunc(x) {
    return x;
}

// 화살표 함수로
let arrowFunc03 = x => x; //let arrowFunc03 = (x) => x; 매개변수가 한개일 때 중괄호 생략가능