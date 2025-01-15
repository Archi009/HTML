//for loop 2.js

//1~10 까지 짝수값구하기

let even = [];
let odd = [];
for (let i = 1; i <= 10; i++) {
  (i % 2 == 1) ? even.push(i): odd.push(i);
}

console.log(even);
for (let i = 0; i < even.length; i++) {
  console.log(`홀수 ${even[i]}, 짝수 ${odd[i]}`);
  document.write(`<p> 짝수 ${even[i]}, 홀수 ${odd[i]}</p>`)
}



let html = '';
// html += `<table border="1">    <tbody>      `
// document.write(`<table border="1">
//     <tbody>
//       `)

for (let j = 1; j <= 10; j++) {
html += `<table border="1" >
    <tbody>
      `
  for (let i = 1; i <= 10; i++) {
    // document.write(`<tr><td>2*${i}</td><td>${2*i}</td></tr>`)
    (i % 2 == 1) ? html += `<tr><td style="background-color:yellow">${j}*${i}</td><td>${j*i}</td></tr>`: html += `<tr><td style="background-color:blue; color: white">${j}*${i}</td><td>${j*i}</td></tr>`
  }
  html += `
    </tbody>
  </table>`
  // html += `\b`
}

// html += `    </tbody>  </table>`

// document.write(`
//     </tbody>
//   </table>`)
document.write(html)