// 산술 연산자
// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2); // -> 15
// console.log(num1 - num2); // -> 5
// console.log(num1 * num2); // -> 50
// console.log(num1 / num2); // -> 2

// console.log(num1 % 2); // -> 0
// console.log(num2 % 2); // -> 1

// console.log(num1++); // -> 10
// console.log(num1); // -> 11
// console.log(++num1); // -> 12
// console.log(num1); // -> 12
// console.log(num1--); // -> 12
// console.log(num1); // -> 11
// console.log(--num1); // -> 10

// 대입 연산자
// let num = 10;
// // num = num + 5;
// num += 5;

// console.log(num); // -> 15

// 비교 연산자
// 일치, 불일치
// let num1 = 10;
// let num2 = "10";

// console.log(num1 === num2); // -> false (자료형 다름)
// console.log(num1 !== num2); // -> true (자료형 다름)

// console.log(num1 == num2); // -> true (값은 일치)
// console.log(num1 != num2); // -> false (값은 일치)

// 대소비교 연산자
let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // -> true
console.log(a > b); // -> false
console.log(b >= c); // -> true
console.log(a > c); // -> false

// 연결 연산자
let price = 10000;
console.log("가격: " + price + "원"); // -> 가격: 10000원

// 논리 연산자 -> true & false
// NOT OR AND

// NOT
let isClicked = true;
let isOpened = false;

console.log(!isClicked); // -> false
console.log(!isOpened); // -> true

// OR
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

// AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

// null 병합 연산자 -> A ?? B
let num1;
let num2 = 10;

console.log(num1 ?? 20); // -> 20
console.log(num2 ?? 20); // -> 10

// 삼항 연산자 -> A ? B :C
let num = 100;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result); // -> 짝수
