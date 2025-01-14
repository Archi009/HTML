//condition3

//두개의 숫자 입력. 모두 짝수=> 모두 짝수. 하나만 짝수 => 하나는 짝수. 없을때 없다


let num = prompt(`숫자 입력`);
let num1 = prompt(`숫자 입력`);

if (num % 2 == 0 && num1 % 2 == 0) {
  console.log("모두 짝수");
} else if (num % 2 == 0 || num1 % 2 == 0) {
  console.log("하나 짝수");
}else  {
  console.log("짝수 없음");
}