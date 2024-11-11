// [렉시컬 스코프]
// JS엔진은 함수를 어디서 '호출' 했는지가 아니라
// 어디서 '정의'했는 지에 따라서 스코프(상위 스코프)를 결정한다.

// '외부 렉시컬 환경에 대한 참조값' => outer
// 함수 정의가 평가되는 시점에 결정 된다.

const x = 1;

// outerFunc내에 innerFuc가 '호출'되고 있음에도 불구하고
// 선언은 밖에서 되었기 때문에 scope를 공유하지 않는다.
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

// innrtFunc와, outerFunc는 서로 다른 scope를 가지고 있다.
function innerFunc() {
  console.log(x); // 1
}

outerFunc();