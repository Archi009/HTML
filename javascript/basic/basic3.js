//hasic3
/*
  두 숫자를 입력받아서 두수의 곱을 출력
  첫번재 값에 5의 값을 더하고, 두번째 3의 값을 빼서 두수의 차를 구해보세요.
*/

let num1 = parseInt(prompt("숫자1"));
let num2 = prompt("숫자2")
// num1 = parseInt(num1) + 1;
num1 += 5 //parseInt(num1) + 1
num2 -= 3; //num2 - 1
console.log(num1);
console.log(num2);

let resulty = num1 - num2; //+연산자와 다르게 *연산자는 알아서 숫자로 인식 해준다
console.log(`${num1}와 ${num2}의 차 ${resulty} 입니다요`);
// console.log(num2);
// console.log(--num2);
// console.log(num1);
// console.log(++num1);