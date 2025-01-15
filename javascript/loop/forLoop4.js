//forloop4.js

/*0 <= Math.random()*100 < 100
 50~100 의 범위를 정하고 무작위로 뽑아 배열에 담자
*/

let scores = [];
let sum = 0;
let max = 0;
let min = 0;


console.log(parseInt(Math.random()*50));

// 50<=점수<=100 사이의 점수를 가진 10명의 평균 구하기
for(let i = 0; i <10; i++){
  scores[i]=parseInt((Math.random()*51)+50)  //50이상 100이하의 범위 점수 구하기
}
console.log(scores);

for(let i = 0; i < scores.length; i++){
  sum += scores[i]
}
avg = sum / scores.length

console.log(`평균 ${avg}`);

//최대값 
for(let i = 0; i < scores.length; i++){
  if(max < scores[i]){    //0번째부터 크기 비교하기
    max = scores[i]
  }
} 
console.log(`최대값 ${max}`);

//최소값
for(let i = 0; i < scores.length; i++){
  if(max > scores[i]){
    max = scores[i]
  }
} 
console.log(`최소값 ${max}`);