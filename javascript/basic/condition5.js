//condition5

// 두 수 : 1~ 100까지의 임의의 값을 생성.
// 큰 수에서 작은 수를 빼서 결과값 출력

let num1 = parseInt(Math.random() * 100) + 1
let num2 = parseInt(Math.random() * 100) + 1
let num3 = parseInt(Math.random() * 100) + 1

console.log(num1, num2,num3);

// if(num1 < num2 && num1 != num2){
//   console.log(num2-num1);}
//   else if(num1 == num2){
//     alert("축하합니다 당첨!!")
// }else{
//   console.log(num1-num2);
// }
let result;
if(num1 > num2 && num1-num2 !=0){
  if(num1>num3 || num1-num3 ==0){
    result = num1;
  }else{
    result = num3;
  }
}else if(num2 > num3 && num2 != num3 ){
  result = num2;
}else {
  result = num3;
}
console.log(result);