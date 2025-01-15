//whileLoop4.js

/* member_id, user01 member_name  point 80*/
let members = [];

members[0] ={memberid:"user01", mamber_name:"길동",point: 10};
members[1] ={memberid:"user03", mamber_name:"현동",point: 20};
members[2] ={memberid:"user03", mamber_name:"고동",point: 40};
let max = members[0];

for(let i = 0; i<members.length; i++){
  if( max.point < members[i]['point']){ //객체끼리 비교.
    max = members[i];
    
  }
}
console.log(max);