function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
// multiplyBy(2)에 들어가는것
// function (x) {
//     return x * 2;
// };

const multiplyByThree = multiplyBy(3);
// multiplyBy(3)에 들어가는것
// function (x) {
//     return x * 3;
// };
console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5),multiplyByThree(10));
console.log(`FINAL => ${result}`);;