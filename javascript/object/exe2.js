//exe2.js

let numAry = [10, 14, 31, 45, 21]
let numAry1 =  [{name: '조카' , age : 10}, 
                {name: '큰조카' , age : 14}, 
                {name: '삼촌' , age : 31}, 
                {name: '큰아버지' , age : 45}, 
                {name: '나' , age : 21}]

//몇번째 값이 무엇인지

numAry.forEach(function (item,idx){

  if(item > 10){
    console.log(`${idx}번째 값 : ${item}`);
  }
})


numAry1.forEach(function (item,idx){

  if(item.age > 20){
    console.log(`나이가 20이 넘는 : ${item.name} ${item.age}`);
  }
})

let filAry = numAry.filter(function(item,idx){
  if(item.name.indexOf('조카') != -1){
    return true;
  }
})