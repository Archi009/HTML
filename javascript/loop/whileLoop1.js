//whileloop.js

// 1~10출력
let i = 1;
while (i<=10){
  console.log(i);
  i++;
}



while (true){
  let temp = parseInt(Math.random() * 100);
  console.log(temp);
  if(temp < 40) 
    break; //반복문 종료
}

let run = true
while (run){
  let temp = parseInt(Math.random() * 100);
  console.log(temp);
  if(temp < 40) 
   run = false; //반복문 종료
}