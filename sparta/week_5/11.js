const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 '실행'해서 innerFunc에 담는다.
// outer함수의 return부분을 innerFunc에 담는다는 얘기가 된다.
const innerFunc = outer();
// outer(); 부분이
// function () {
//     console.log(x);
//   }; 로 실행된다는 얘기
// -------------------------여기서는 outer함수의 실행컨텍스는?
//
innerFunc();