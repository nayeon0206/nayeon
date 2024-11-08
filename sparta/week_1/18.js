// 1. while
// let i = 0;

// while (i < 10) {
//   console.log(i); // 메인로직
//   i++; // 증감
// }

// for (초기값; 조건; 증감) {

// }

// while 문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i + "는 5의 배수입니다.");
//   }
//   i++;
// }
// -----------------------------------
// 2. do ~ while 문

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break
// for(let i = 0; i <10; i++) {
//   if (i===5) {
//     break;  //for문 블록을 벗어나서 밖으로 나가버림// 끝나버림
//   }
//   console.log(i);
// }

// continue
for(let i = 0; i <10; i++) {
  if (i===5) {
    continue; // 5를 제외, 다음순서로 넘어감
  }
  console.log(i);
}