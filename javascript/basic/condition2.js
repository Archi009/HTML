//condition2
//입력받은 숫자 => 2의 배수 ? 3의 배수? 공배수


let num = prompt();

if (num % 6 == 0) {
  console.log(`${num}은 2와 3의 공배수입니다.`);
} else if (num % 3 == 0) {
  console.log(`${num}은 3의 배수입니다.`);
} else if (num % 2 == 0) {
  console.log(`${num}은 2의 배수입니다.`);
} else {
  console.log(`${num}`);
}

let num2 = prompt();
if (num2 == 0) {
  console.log(`다른값을 입력하세요`);
  num2 = prompt()
}

if (num2 % 2 == 0 && num2 % 3 == 0) {
  console.log(`${num2}은 2와 3의 공배수입니다.`);
} else if (num2 % 3 == 0) {
  console.log(`${num2}은 3의 배수입니다.`);
} else if (num2 % 2 == 0) {
  console.log(`${num2}은 2의 배수입니다.`);
} else {
  console.log(`${num2}`);
}

num = parseInt(num);
if (num == 0 || isNaN(num)) {
  console.log(`정확한 값을 입력하세요`);
} else {
  if (num % 2 == 0 && num % 3 == 0) {

    console.log(`${num}은 2와 3의 공배수입니다.`);

  } else if (num % 2 == 0) {
    console.log(`${num}은 2의 배수입니다.`);
  } else if (num % 3 == 0) {
    console.log(`${num}은 3의 배수입니다.`);
  } else {
    console.log(`${num}`);
  }
}