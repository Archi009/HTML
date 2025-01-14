//conditino4

const obj = {
  name: "홍길동",
  age: 20,
  showName: function() {
    console.log(obj.name);
  }
}

obj.showName();

Math.random(); // 0<=x<1

console.log(parseInt(Math.random() * 10)+1);

let num1 = parseInt(Math.random() * 10)+1
let num2 = parseInt(Math.random() * 10)+1

let sumEven = 10; //짝수의 값 합하기
let sumOdd = 20;  //홀수의 값 합하기

console.log(num1, num2);

// if (num1 % 2 == 0){
//   sumEven += num1;
// }else{
//   sumOdd += num1;
// }
// if (num2 % 2 == 0){
//   sumEven += num2;
// }else{
//   sumOdd += num2;
// }


function check(e){
  if (e % 2 == 0){
    console.log(e);
    sumEven += e;
  }else{
    console.log(e);
    sumOdd += e;
  }
}

check(num1)
console.log(`짝수합 ${sumEven} 홀수합 ${sumOdd}`);

check(num2)
console.log(`짝수합 ${sumEven} 홀수합 ${sumOdd}`);