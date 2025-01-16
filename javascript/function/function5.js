//function5.js

//this: object 일때 object자신을 가리킴.
let obj = {
  name: "홍길동",
  birth: "1994-04-22",
  bloodType: "O",
  showInfo: function () {
    console.log(`이름음 ${this.name} 생일은 ${this.birth} 혈액형은 ${this.bloodType}`);
  },
  addNumber: function ( num1 = 0 , num2 = 0) {
    return num1 + num2;
  },
  //함수를 매개값으로 넣는다 ex)addEventListener('click',function(){})
  calculateFnc: function (num1 = 0, num2 = 0, calFunc){
    return calFunc(num1,num2);
  }
} 

obj.showInfo();
//alert(obj.addNumber(10,12));
let result = obj.calculateFnc(10,5, function (a , b) {
  return a - b;
});
let result1 = obj.calculateFnc(10,5, function (a , b) {
  return a + b;
});

let result2 = obj.calculateFnc(10,5,multi)

function multi (num1, num2){
  return num1 * num2
}


console.log(result);
console.log(result1);
console.log(result2);
