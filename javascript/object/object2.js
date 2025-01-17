// obj2

//concet 배열 요소 합

let numAry1 = [10, 20];
let numAry2 = [30, 40];

let result = numAry1.concat(numAry2);

console.log(result);

console.log(result.join('-')); //()안의 구분자로 구분해서 배열을 문자열로 바꾼다
console.log(result.join('-').split('-'));//()안의 구분자를 없애고 문자열을 배열로 바꾼다


let result1 = result.join('-').split('-');

result1.push('60');
result1.unshift('70');

console.log(result1);

result1.pop();//가장 마지감 요소 삭제
console.log(result1);
result1.shift();//가장 첫번째 요소 삭제
console.log(result1.indexOf('200')); //배열 내부의 찾고자 하는 값의 위치를 알려주는데, 배열 내부에 없는걸 찾으면 -1을 반환 해준다


let testNm = ["홍길동", "김민수", "허성식","박창식"];

if(testNm.indexOf('김민수') != -1){
  console.log("찾는 이름 있음");
}else{
  console.log("찾는 이름 없음");
}
result1.unshift('70');

console.log(result1.at(1)); //배열 내부의 위치를 입력하면 그에 맞는 값을 출력해줌

result1.sort();

console.log(result1);
console.log(result1.reverse());





