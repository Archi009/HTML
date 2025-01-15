//Homework

let scores = [] ;
let sum = 0;

for(let i = 0; i < 10; i++){
  scores.push(parseInt(Math.random()*101));
  sum += scores[i];
}
console.log(sum);
console.log(scores);
let avg = sum / scores.length
console.log(avg);
if(avg <= 50){
  alert(`재시험`)
}else if(avg >= 90){
  alert(`GOOD`)

}