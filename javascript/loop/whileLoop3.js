// whileLoop3.js

//Object

let obj = {
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.height);
console.log(obj.weight);

//for..in 반복문
for(let prop in obj){
  console.log(`속성 ${prop}, 값: ${obj[prop]}`);
}

//for of
let arr = ['길동','말동','새동','개동'];

for(let name of arr){
  console.log(name);
}

let myFr = {
  name : "길동",
  phone : "010-2121-1221",
  address : "대구 중구 100번지"
}
let myFr2 = {
  name : "말동",
  phone : "010-3333-3333",
  address : "대구 중구 300번지"
}
let myFr3 = {
  name : "개동",
  phone : "010-5555-1412",
  address : "대구 중구 200번지"
}
let myFr4 = {
  name : "새동",
  phone : "010-7777-1777",
  address : "대구 중구 400번지"
}

let list =[myFr,myFr2,myFr3,myFr4];
 
list[4] = {name: '강동' , address: '대전 '}

for (let i = 0; i<list.length; i++){
  //이름
  console.log(list[i].name, list[i].phone);
}

for(let fr of list){
  for(let prop in fr){
    console.log(`${prop}은 ${fr[prop]}`);
  }
}
