// 추가 버튼
const addBtn = document.querySelector(".addBtn");
let notice = document.querySelector(".notice");

addBtn.addEventListener("click", () => {
  notice.style.display = "block";
})
// 작성 시간
function getTime() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let dayName = today.toLocaleDateString('ko-KR', {weekday: 'short'});
  let hours = today.getHours();
  let minutes = today.getMinutes();
  return `${year}/${month}/${date}/${dayName} ${hours}:${minutes}`
}

function newRegister() {
  let newP = document.createElement("p");  // 새 p 요소 만들기 
  newP.setAttribute("id", "add");
  let contents = document.querySelector("#contents");
  let newText = document.createTextNode(contents.value);  // 새 텍스트 노드 만들기
  newP.appendChild(newText);  // 텍스트 노드를 p 요소의 자식 요소로 연결하기
  console.log("newText", newText);
  console.log("newP", newP);
  // contents.value = text;
  // console.log(text);

  let delBttn = document.createElement("span"); 	// 새 button 요소 만들기 
  let delText = document.createTextNode("삭제");  // 새 텍스트 노드 만들기
  delBttn.setAttribute("class", "del");  // 버튼에 class 속성 설정하기
  delBttn.appendChild(delText);  // 텍스트 노드를 button 요소의 자식 요소로 연결하기							
  newP.appendChild(delBttn);  //	del 버튼을 p 요소의 자식 요소로 		

  let modifyBttn = document.createElement("span");
  let modifyText = document.createTextNode("수정");
  modifyBttn.setAttribute("class", "mod");
  modifyBttn.appendChild(modifyText);
  newP.appendChild(modifyBttn);

  let addNotice = document.querySelector("#addNotice");
  addNotice.insertBefore(newP, addNotice.childNodes[0]);  // p 요소를 #addNotice 맨 앞에 추가하기
  // addNotice.appendChild(newP); // p 요소를 #nameList의 자식 요소로 만들기
  contents.value = "";  // 텍스트 필드 지우기

  let deleteBttns = document.querySelectorAll(".del");
  let modifyBttns = document.querySelectorAll(".mod");

  for (let i = 0; i < deleteBttns.length; i++) {  // deleteBttns에 있는 요소 전체를 반복
    deleteBttns[i].addEventListener("click", function () {  // i번째 버튼을 클릭했을 때 실행할 함수 선언
      if (this.parentNode.parentNode)  // 현재 노드(this)의 부모 노드의 부모 노드가 있을 경우 실행
        this.parentNode.parentNode.removeChild(this.parentNode);  // ‘현재 노드(this)의 부모 노드의 부모 노드’를 찾아 ‘현재 노드(this)의 부모 노드(p 노드)’ 삭제
    });
  }

  for(let i=0; i<modifyBttns.length; i++) {
    modifyBttns[i].addEventListener("click", function() {
      
    })
  }
  notice.style.display = "none";
  // newP.innerHTML = `${getTime()} ${newText}` // text 못 불러옴
}


// // 등록 버튼
// // let addNotice = [];
// // let registerBtn = document.querySelector(".registerBtn");

// // registerBtn.addEventListener("click", register);

// // function register() {
// //   let contents = document.querySelector(".contents").value;

// //   if (contents.length > 0) {
// //     addNotice.unshift();
// //     showNotice();
// //   }
// //   document.querySelector(".contents").value = "";
// //   notice.style.display = "none";
// // }



// let addNotice = [];
// let registerBtn = document.querySelector(".registerBtn");
// registerBtn.addEventListener('click', register);

// function register() {
//   let contents = document.querySelector(".contents").value;

//   if (contents.length > 0) {
//     addNotice.unshift(contents);
//     showNotice();
//   }
//   document.querySelector(".contents").value = "";
//   notice.style.display = "none";
// }

// // function getTime() {
// //   let today = new Date();
// //   let year = today.getFullYear();
// //   let month = today.getMonth() + 1;
// //   let date = today.getDate();
// //   let hours = today.getHours();
// //   let minutes = today.getMinutes();
// //   return `${year}/${month}/${date} ${hours}:${minutes}`
// // }

// function showNotice() {
//   // let notice = document.querySelector(".notice");
//   // const contents = document.querySelector(".contents");

//   // const list = document.createElement("div");
//   // list.id = "notice_list"
//   // // addNotice.forEach((notice) =>

//   // for (let i = 0; i < contents.length; i++) {
//   //   const p = document.createElement("p");
//   //   p.id = "add" // == p.setAttribute("id", "add")
//   //   p.classList.add("add");

//   //   p.innerHTML = `${getTime()} ${contents}`
//   //   list.appendChild(p);
//   // }

//   let today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let date = today.getDate();
//   let hours = today.getHours();
//   let minutes = today.getMinutes();


//   let list = "<div>";
//   for (let i = 0; i < addNotice.length; i++) {
//     list += '<p id="add" class="add">' + year + "/" + month + "/" + date + " " + hours + ":" + minutes + " " + addNotice[i] +
//       '<input id="changeNoticeBtn" class="changeNoticeBtn" type=button value="수정" onclick="location.href=`updateForm.jsp`"><input id="deleteNoticeBtn" class="deleteNoticeBtn" type=button value="삭제" href="javascript.void(0)"></p>'
//   }
//   list += "</div>";
//   document.querySelector(".addNotice").innerHTML = list;
// }

