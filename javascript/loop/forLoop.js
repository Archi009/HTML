//for 문 

// 1 ~ 10까지 출력.

let sum = 0;

for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 ${i}`);
  sum +=i;

}

console.log(`sum의 값` + sum);
console.log(`end of for`);

for (let i = 10; i >= 1; i--){
  console.log(`현재 i의 값 ${i}`);
}

//1~ 10 까지 홀수의 합

let sum1 = 0;

for (let i = 1; i <= 10 ; i++){
  if(i%2==1)
    sum1 += i;
}
console.log(sum1);