//whileLoop5.js

let members = [];

members[0] = {
  memberid: "user01",
  mamber_name: "길동",
  point: 10
};
members[1] = {
  memberid: "user03",
  mamber_name: "현동",
  point: 20
};
members[2] = {
  memberid: "user03",
  mamber_name: "고동",
  point: 40
};

// let name = prompt("이름 입력")
// while (true) {
//   let point;
//   let name = prompt("이름 입력")
//   console.log(name);
//   if (name == "stop" || name === null) break;

//   for (let i = 0; i < members.length; i++) {
//     if (name == members[i]['mamber_name']) {

//       point = members[i]['point'];
//       console.log(point);
//     }

//   }
//   // console.log(point);
//   if (point === undefined) {
//     console.log(`찾으시는 이름이 없습니다.`);
//   }
// }

while (true) {
  let point;
  let name = prompt("이름 입력")
  console.log(name);
  if (name == "stop" || name === null) break;
  let exits = false;

  for (let i = 0; i < members.length; i++) {
    if (name == members[i]['mamber_name']) {

      point = members[i]['point'];
      exits = true;
      console.log(point);
      break
    }

  }
  // console.log(point);
  if (!exits) {
    console.log(`찾으시는 이름이 없습니다.`);
  }
}

