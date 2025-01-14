//basic1.js
/*
변수 선언 : 이름, 연락처, 주소 선언.
console 출력

*/
let myNm = "임성욱";
let contact = "01022222222";
let addr = "서울"
let largNum = 100000000000000000000000000000000000000000000000000000000000000n;

const bloodType = "O"; // 프로그램 전체에서 변하지 않는 값으로 선언.
const PI = 3.141592; //상수는 구분을 위해 대문자 선언

console.log("===========================");
console.log("여기서부터 다른 문서입니다.");
console.log(myNm);
console.log(contact);
console.log(addr);
console.log(`백틱으로도 문자열 쌉가능`);
console.log(`백틱으로하면 ${myNm} ` + "변수를 일일히 큰따옴밖에 따로 쓸 필요 없이 ${} 안에 변수 넣면나옴 ");
console.log(`${bloodType}은/는 혈액형`);
console.log(`반지름 5인 원의 넓이는  ${5 * 5 * PI}`);
console.log(largNum);
console.log(typeof myNm);

console.log(typeof largNum); //변수의 자료형을 출력
console.log(typeof (PI == 3)); //boolean

let myInfo = {
  name : "길동"
  , age : 20
};
console.log(typeof myInfo); // object

let myArr = ["졸려" , "계속 졸려", "자고싶다" , 1 ,2, 3] //배열이지만 obj 로 출력댐

console.log(typeof myArr);

let specialType;
console.log(specialType); //값을 할당시키지 않은 상태

let specialType1 = null;
console.log(specialType1); //null