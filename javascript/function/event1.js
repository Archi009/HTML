//event1.js

//id num1 num2 result


let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let clear = document.querySelector('#clear');

plus.addEventListener('click', function () {
  // let num1 = document.getElementById('num1').value; value 값은 문자로 받는다. 

  /* value를 쓰지 않고 아래 console.dir()을 사용하면 
   input 태그의 모든 정보를 콘솔창에 가져온다 
   그곳에서 value의 여러 속성중 하나인 valuAsNumber을 찾아 숫자로 받아 사용할 수 있었다.
   만약 그냥 value로 사용하려 한다면 parseInt가 필요하다.*/

  // let num2 = document.getElementById('num2').value;
  let num1 = document.getElementById('num1').valueAsNumber;
  let num2 = document.getElementById('num2').valueAsNumber;
  let result = document.getElementById('result');
  
  // console.dir(num1);
  // console.dir(num2);

  // result.value == document.quarySelector("result")['value'] 와 같다
   result.value = num1 + num2;
})

minus.addEventListener('click', function () {
  let num1 = document.getElementById('num1').valueAsNumber;
  let num2 = document.getElementById('num2').valueAsNumber;
  let result = document.getElementById('result');

  result.value = num1 - num2;
})

clear.addEventListener('click', function (){
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let result = document.getElementById('result');

  num1.value ='' ;
  num2.value = '';
  result.value = '';
})