//basic 2

let anyVal = prompt("값을 입력하세요.:");
let anyVal2 = prompt("값을 입력하세요.:");

let result = anyVal + anyVal2
console.log(anyVal); //프롬프트 값으로 받아오는 값은 String이다.
console.log(typeof anyVal); 
console.log(`두수의 합은 ${result} 입니다`); // 따라서 결과값이 1020으로 나옴


let result1 = Number(anyVal) + parseInt(anyVal2);
console.log(`숫자로 파싱한 결과 ${result1}`);
