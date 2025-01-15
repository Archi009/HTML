// whileloop2.js
//stop 일 시 종료

let score = 0;
let int = 0;
let temp = 0;
while (true) {
  int = prompt("점수를 입력하쇼")
  temp = parseInt(int);  //문자열인지 확인하기 위한 변수
  if(isNaN(temp)){       //문자열 일시 parseInt를 통해 NaN이 된다.
    break;
  }
  console.log(int);
  if (int == "stop" ||  int == null) {     //취소를 누르면 null값이 들어온다
    break;
  }
  // parseInt(int);
  console.log(`1번트` + int);

  if (int > parseInt(score)) {         //비교시 미쳐서 문자로 인식 할 수 있기 때문에 정수화한다
    score = int
  };

  console.log(`마지막` + score);

}

