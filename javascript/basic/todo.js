// todo.js
//프롬프트로 숫자 하나 받고  입력받은 숫자가 0보다 큰경우 1을 출력 
// 입력받은 숫자가 0보다 작은 경우 -1
//입력받은 숫자가 0인 경우 0 출력

let num = prompt()

if (num > 0){
  console.log(1);
}else if(num < 0){
  console.log(-1);
}else{
  console.log(0);
}