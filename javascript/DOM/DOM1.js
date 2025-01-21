//DOM.js

document.addEventListener("DOMContentLoaded", init)

function init() {
  console.dir(document);
 
  //form 태그 내부의 이벤트 발생을 통한 이동을 막기위함
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault() // form태그 기본 이동 차단
    let mid = document.querySelector('input[name="member_id"]').value
    let mnm = document.querySelector('input[name="member_name"]').value
    let mp = document.querySelector('input[name="point"]').value
    let list = document.getElementById('list')
    let score = {
      memId: mid,
      memNm: mnm,
      poin: mp
    };
    
    let arr = [mid, mnm, mp]
    
    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("조건에 부합하지 않습니다.")
      document.querySelector('input[name="member_id"]').focus()
      document.querySelector('input[name="member_id"]').value = ''
      return;
    }
    
    console.log(e);
    // <tr><td>admin</td>......</tr>
    //createElement  appendChild
    
    
    //하나씩 만들어주기
    let tr = document.createElement('tr') //가장 바깥 tr
    let td = document.createElement('td') //첫번째 td
    let inp = document.createElement('input')
    inp.name = "check"
    inp.type = "checkbox"
    td.appendChild(inp)
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = mid
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = mnm
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerText = mp
    tr.appendChild(td)
    
    td = document.createElement('td')
    let btn = document.createElement('button')
    btn.style.backgroundColor = 'violet'
    btn.innerText = "삭제"
    btn.addEventListener('click',function () {
      btn.parentElement.parentElement.remove()
    })
    td.appendChild(btn)
    tr.appendChild(td)
    list.appendChild(tr)
    
    //객체로 담기
    // list.appendChild(makeTr(score))
    //배열로 담기
    // list.appendChild(makeTrAry(arr))
  }) //end of submit event



  //전체 체크박스 선택
  let ckHead = document.querySelector('input[name = "chAll"]')
  let chList = [];
  //check박스는 click => checked 이므로 클릭 당시엔 상태값이 변경전 값이다.
  //따라서 change 를 이용한다
  console.log(chList);
  ckHead.addEventListener('change',function () {
    document.querySelectorAll('input[name = "check"]').forEach(function(item){
      item.checked = ckHead.checked
    })
    /*-----------------------------------------------------*/
    // chList = []
    // chList = document.querySelectorAll('input[name = "check"]')
    // console.log(chList);
    // console.dir(ckHead);
    // chList.forEach(function(item){
    //   if(ckHead.checked){
    //     item.checked = true;
    //   }else{
    //     item.checked = false;
    //   }
    // })
    /*------------------------------------------*/
  })//end of 전체 체크박스 선택
} // end of init


//함수에 기본 매개변수를 넣어주자!
function makeTr(score = {}) {
  //객체에 담아서 간소화
  let tr = document.createElement('tr')
  let td = document.createElement('td') //첫번째 td
  let inp = document.createElement('input')
  inp.name = "check"
  inp.type = "checkbox"
  td.appendChild(inp)
  tr.appendChild(td)
  for (let prop in score) {
    td = document.createElement('td')
    td.innerText = score[prop]
    tr.appendChild(td)
  }
  td = document.createElement('td')
    let btn = document.createElement('button')
    btn.innerText = "삭제"
    td.appendChild(btn)
    tr.appendChild(td)
  return tr
}

function makeTrAry(arr = []) {
  //배열에 담아서 간소화
  let td = document.createElement('td') //첫번째 td
    let inp = document.createElement('input')
    inp.name = "check"
    inp.type = "checkbox"
    td.appendChild(inp)
    tr.appendChild(td)
  let tr = document.createElement('tr')
  arr.forEach(function (item) {
    td = document.createElement('td')
    td.innerText = item
    tr.appendChild(td)
  })
  td = document.createElement('td')
    let btn = document.createElement('button')
    btn.innerText = "삭제"
    td.appendChild(btn)
    tr.appendChild(td)
  return tr
}