// typeof
// let num = 10;
// console.log(typeof num);

// 숫자형
// let num1 = 125;
// let num2 = 10.000012;

// console.log(typeof num1);
// console.log(typeof num2);

// Infinity & NaN;
// let num = Infinity;
// let num1 = 100 / 0;

// console.log(num);
// console.log(num1);

// let number = "javascript" / 10;

// console.log(number);

// BigInt : 2^53-1 < BigInt < -(2^53-1)
let bigNum1 = 999999999999999999999999n;
let bigNum2 = BigInt("999999999999999999999999");

console.log(typeof bigNum1);
console.log(typeof bigNum2);

// String
let name = "suyeon";
console.log(typeof name);

let name2 = "suyeon";
// 템플릿 리터럴
let intro = `제 이름은 ${name}입니다.`;

console.log(intro);

// boolean -> true / false

// Null -> 존재 X, 알 수 없는 값
// let num = null;
// console.log(typeof num); -> object
// console.log(num === null); // -> true

// Undefined -> 값이 할당되지 않은 상태
let num;
console.log(typeof num);

// 묵시적 형 변환
// let num1 = "15";
// let num2 = 5;

// console.log(num1 / num2); -> 3 (number)

// 명시적 형 변환
let num1 = "15";
let num2 = 5;

console.log(num1 + num2); // -> 155 (string)
console.log(parseInt(num1) + num2); // -> 20 (number)
