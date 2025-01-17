//object4.js


//요일과 달은 몇번째 달 몇 번째 요일이므로 0부터 시작한다.
let today = new Date;
today.setDate(12);
today.setMonth(3);
console.log(today);
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth());


//1일의 요일과 그 달의 마지막 날을 알면 달력 만들기 가능.

/*2월 말일
let month = 2;
let date = 0;
*/
let month = 2;
let date = 0;
let year = 2024;


today.getFullYear(year);
today.setMonth(month);
today.setDate(date);
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth());

today.getDate();
//2022년 5월
today.setFullYear(2022)
console.log(today);

console.log(today.getTime())
console.log(today.getTime() - 1646032032707)



let now = new Date();

console.clear();
console.log(today == now);
console.log(today.getTime() == today.getTime());