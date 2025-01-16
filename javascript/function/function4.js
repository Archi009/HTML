//function4.js

//이벤트 - 이벤트 핸들러

let item = document.querySelector('button');

console.log(item);

item.addEventListener('click', function () {
  alert('마우스가 클릭댐')
});

item.addEventListener('mouseover', function () {
  item.style.backgroundColor = "yellow";
});

item.addEventListener('mouseout', function () {
  item.style.backgroundColor = null;
});