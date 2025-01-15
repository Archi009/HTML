//forloop3

let score = 90;

let arr = [];
let sum = 0;
for(let i = 1; i <= 10; i++){
  arr.push(i*10)
  console.log(arr[i-1]);
}
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log(arr);
console.log(sum);

//6번째와 7번째 값을 이동
let sixth = 0;
    console.log(arr[5],arr[6]);
    
    sixth = arr[5]
    arr[5] = arr[6]
    arr[6] = sixth
    console.log(arr[5],arr[6]);

let pos = 0;
let temp = 0;

