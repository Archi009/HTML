let myName; // 변수 선언

myName = "user01"; //문자열(String) 타입
let vari = "변수";
let myAge = 20; //숫자열(Number) 타입
const constant = "상수";
let myObj = { name: "user02" , age: 30}; //객체 (Object) 타입

console.log(myName);
console.log(vari);
console.log(constant);
console.log(myAge);
console.log(myObj);
console.log("내 나이는 " + (myObj.age + 3) + "입니다.");
console.log("내 이름은 " + myObj.name + "입니다.");
vari = "변수 2";
// constant = "상수"; => const는 상수를 정의 안의 값을 바꿀 수 없다
console.log(vari);

console.log(myName == "user01"); // 비교연산자
console.log(myAge == 30);
console.log(myAge == myName);