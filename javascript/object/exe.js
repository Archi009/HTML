//연습1.exe1.js

let myFriends = [];
myFriends.push({
  name: "홍길동",
  escore: 70,
  kscore: 78,
  gender: 'Female'
})
myFriends.push({
  name: "신현욱",
  escore: 80,
  kscore: 88,
  gender: 'Female'
})
myFriends.push({
  name: "김민식",
  escore: 90,
  kscore: 70,
  gender: 'Male'
})
myFriends.push({
  name: "석지욱",
  escore: 90,
  kscore: 55,
  gender: 'Female'
})

// forEach 출력 : 콘솔 출력

myFriends.forEach(item => {

  console.log(item);

});

myFriends.forEach(item => {

  console.log(item.name);

});


myFriends.forEach(item => {
  if (item.escore >= 90)
    console.log(`90점 이상 ${item.name}`);

});

myFriends.forEach(item => {
  if ((item.escore + item.kscore) / 2 >= 80)
    console.log(`평균 80 점 ${item.name}`);
});

let avg = 0;
let sum = 0;
let count = 0;

myFriends.forEach(item => {

  if (item.gender == 'Female') {
    sum += item.escore;
    count++
  }
});
avg = sum / count;
console.log(`여자 영어 평균 ${avg}`);;

//filter: 여학생의 영어 평균 미만 => underAvgAry

let underAvgAry = myFriends.filter(function(item){
  if (item.escore < avg){
    return true
  }else {
    return false
  }
})
console.log(underAvgAry);