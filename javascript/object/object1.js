//object.js


let obj = {} // 사용자 생성 object 선언

let obj1 = new Object(); //내장 객체(생성자)를 이용한 인스턴스 생성

obj1.title = "이것이자바다";
obj1['price'] = 30000;

console.log(obj1);


let toDay = new Date();

console.log(toDay.getFullYear());

let numAry = new Array();
let numAry1 = [];  //=Array
console.log(numAry);
numAry.push(49);
console.log(numAry);
numAry.unshift(50);
console.log(numAry);
console.log(numAry);
numAry.splice(1, 1, 8)