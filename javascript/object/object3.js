//object3.js

let numAry = [20, 13, 45, 62, 19];

//forEach()
let sum = 0;
let ary1 = [];
let inAry = [];
let even = 0;
let oddIndex = 0;
let max = 0 ;

numAry.forEach(function (item, index, ary) { // 배열의 길이동안 반복문을 돌리는데 그 동안 ()안의 함수를 실행하겠다); 
  console.log(item, index, ary);           //첫번째 매개변수는 값을 b는 index값을 c는 배열 그 자체를 말한다
  sum += item;
  inAry.push(index);
  ary1.push(ary);
  if(item % 2 === 0){
    even += item;
  }
  if(index % 2 === 1){
    oddIndex += item;
  }
  if (max < item){
    max = item;
  }

});
console.log(sum, inAry, ary1, even, oddIndex, max);



//filter(function (item, index, ary){}) 조건을 만족하는(true값을 반환하는) 새로운 배열을 생성.

let fliterAry = numAry.filter(function (item, index, ary){
    if(item % 2 === 1){
      return true;
    } else {
      return false;
    }
})

console.log(fliterAry);



