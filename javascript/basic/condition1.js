//condition1
//조건문 (if)

let firstNm  = 6;
//firstNm 값의 홀짝 구분
if (firstNm % 2 == 1) {
 console.log(`${firstNm}은 홀수입니다.`); 
} else {
  console.log(`${firstNm}은 짝수입니다.`);
}

if (firstNm % 2 == 0) {
  console.log(`${firstNm}은 2의 배수입니다.`);
 } else if (firstNm % 3 == 0)  {
   console.log(`${firstNm}은 3의 배수입니다.`);
 } else {
  console.log(`${firstNm}은 3또는 2의 배수가 아닙니다.`)
 }
// if (firstNm % 2 == 0){
//  console.log(`${firstNm}은 짝수입니다.`); 
// }