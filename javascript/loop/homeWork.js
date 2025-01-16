//Homework

let scores = [] ;  //점수 담을 배열
let sum = 0;       // 점수의 합

for(let i = 0; i < 10; i++){          //0~100 점사이의 점수를 배열에 삽입. 점수의 합 구함
  scores.push(parseInt(Math.random()*101));
  sum += scores[i];
}
console.log(sum);
console.log(scores);

let avg = sum / scores.length         // 평균값

console.log(avg);
 
if(avg <= 50){
  alert(`재시험`)
}else if(avg >= 90){
  alert(`GOOD`)

}