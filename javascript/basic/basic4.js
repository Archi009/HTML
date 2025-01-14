//278 시간 => ?일 ?시간인가?
let hour1 = prompt();

console.log(`${hour1}은 ${Math.floor(hour1 / 24)}일 ${hour1 % 24 }시간 입니다.`);

//12124 분 => ?일 ?시간 ? 분 인가?
let min1 = prompt();

console.log(`${min1}은 ${Math.floor(min1/(24*60))}일 ${Math.floor((min1%(24*60))/60)}시간 ${(min1%(24*60))%60}분 입니다.`);


let calDay = parseInt(hour1/24); //시간을 일로

let calDayByMin = parseInt(min1/(24*60)); // 분을 일로
let calHour = min1%(24*60)/60; //분을 시간으로
let calmin = min1%60

console.log(calDay, calDayByMin, calHour, calmin);