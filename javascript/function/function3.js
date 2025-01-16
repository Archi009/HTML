//function3.js

//매개변수가 2개이상

function getAvg(e = 0, g = 0) {
  return (e + g) / 2
}

console.log(getAvg(10, 20));

let avg1 = getAvg(10, 30);
let avg2 = getAvg(39, 50);

console.log(getAvg(avg1, avg2));