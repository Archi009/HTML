//function2

/*
  함수이름: getMax
  매개변수: 배열 (numAry)
  기능: 배열의 요소중에서 제일 큰값을 콘솔 출력.
*/

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = []

for (let i = 0; i < 5; i++){              //50이하의 자연수 5개를 무작위로 배열에 삽입
  ary3[i] = parseInt(Math.random() * 50)
}



function getMax(numAry=[]){                    //배열내부의 값중 최대값 출력
  let max = 0;
  for (let i = 0; i < numAry.length; i++){
    if(max < numAry[i]){
      max = numAry[i];
    }
  }
  // console.log(`최대값은 ${max}입니다.`);
  return max;
}

let result = getMax(ary1);
console.log(result);
console.log(getMax(ary2));
document.write(`<h2>${getMax(ary3)}</h1>`)