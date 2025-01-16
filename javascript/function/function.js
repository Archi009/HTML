//function1.js

let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

let sum = 0 ;

// for (let i = 0; i < numAry1.length; i++){
//   sum += numAry1[i];
// }
// for (let i = 0; i < numAry2.length; i++){
//   sum += numAry2[i];
// }
// for (let i = 0; i < numAry3.length; i++){
//   sum += numAry3[i];
// }
console.log(sum);

//기능정의. 함수의 정의 구문에서는 변수
function sumAry(e){                         //함수 선언
  for (let i = 0; i < e.length; i++){
    sum += e[i];
  }
}

//함수를 호출해서 실행할때는 값.
sumAry(numAry1);
sumAry(numAry2);
sumAry(numAry3);

console.log(sum);