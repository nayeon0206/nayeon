//클로저(Closure)

// 첫번쨰 const x 와 두번째 const x는 스코프가 다름.
// 첫번째x는 전역 스코프
const x = 1;

function outerFunc() {
    //outerFunc스코프 내에 있는 것
    const x = 10;
  function innerFunc() {
    // x는 어디서 참조할까요??
    // 함수가 선언된 렉시컬 환경?
    // 함수가 선언될 당시의 외부 변수 등의 정보!
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();
