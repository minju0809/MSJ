// 이전 버튼
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
};

// 추가 버튼
const addBtn = document.querySelector(".addBtn");
let notice = document.querySelector(".notice");

addBtn.addEventListener("click", () => {
  notice.style.display = "block";
  document.querySelector("#contents").focus(); // 텍스트 필드에 focus( ) 메서드 적용
});

// 등록, 삭제
let registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", newRegister); // registerBtn.onclick = addNotice; 라고 해도 됨

function newRegister() {
  let newP = document.createElement("p");
  let contents = document.querySelector("#contents");
  newP.innerText = `${getTime()} ${contents.value}` 
  // let newText = document.createTextNode(contents.value);
  // newP.appendChild(newText);

  let close = document.createElement("span");
  close.innerText = '삭제';
  close.setAttribute("class", "close");
  newP.appendChild(close);
  
  let addNotice = document.querySelector("#addNotice");
  addNotice.appendChild(newP);
  contents.value = "";
  notice.style.display = "none";

  let removeBtn = document.querySelectorAll(".close");

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function() {
      if (this.parentNode.parentNode) 
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
}

function getTime() {
  let registerTime = new Date();
  let year = registerTime.getFullYear();
  let month = registerTime.getMonth() + 1;
  let date = registerTime.getDate();
  let dayName = registerTime.toLocaleDateString("ko-KR", { weekday: "short" });
  let hours = registerTime.getHours();
  let minutes = registerTime.getMinutes();
  return `${year}/${month}/${date}/${dayName} ${hours}:${minutes}`;
}

//////////////////////////////////////////////////////
// function timeFormat (start, end) {
//   const start = new Date(start);
//   const end = new Date(end);

//   const duration = Math.floor((end.getTime() - start.getTime()) / 6000);
//   if (duration < 1) return '몇 초 전';
//   if (duration < 60) return `${duration}분 전`;
//   if (duration < 60 * 24) return `${Math.floor(duration / 60)}시간 전`;
//   if (duration < 60 * 24 * 30) return `${Math.floor(duration / 60 / 24)}일 전`;
//   if (duration < 60 * 24 * 365) return `몇 달 전`;
//   return `${Math.floor(duration / 60 / 24 / 365)}년 전`;
// }

//////////////////////////////////////////////////////////
// 등록, 삭제
// let addNotice = [];

// let registerBtn = document.querySelector("#registerBtn");
// registerBtn.addEventListener("click", addList); // registerBtn.onclick = addNotice; 라고 해도 됨

// function addList() {
//   let contents = document.querySelector(".contents").value;
//   if (contents != null) {
//     addNotice.push(contents); // addNotice 배열의 끝에 contents 변수 값 추가
//     document.querySelector("#contents").value = ""; // id=”contents”인 요소의 값을 지움
//   }
//   showList();
//   notice.style.display = "none";
// }

// function showList() {
//   let list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
//   for (let i = 0; i < addNotice.length; i++) {
//     // 배열 요소마다 반복
//     // list += "<li>" + getTime() + addNotice[i] + "<span class='close' id=" + i + ">삭제</span></li>"; // 요소와 삭제 버튼을 <li>~</li>로 묶음
//     list += `<li> ${getTime()} ${addNotice[i]} <span class='close' id= ${i}>삭제</span></li>`; // 요소와 삭제 버튼을 <li>~</li>로 묶음
//   }
//   list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
//   document.querySelector("#addNotice").innerHTML = list; // list 내용 표시

//   let remove = document.querySelectorAll(".close"); // 삭제 버튼을 변수로 저장. 배열 형태가 됨
//   for (let i = 0; i < remove.length; i++) {
//     // remove 배열의 요소 모두를 확인
//     remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
//   }
// }

// function removeList() {
//   let id = this.getAttribute("id"); // this(클릭한 삭제 버튼)의 id 값 가져와 id 변수에 저장
//   addNotice.splice(id, 1); // addNotice 배열에서 인덱스 값이 id인 요소 1개 삭제
//   showList(); // 변경된 addNotice 배열을 다시 화면에 표시
// }

/////////////////////////////////////////////////////////////
// 등록 버튼 클릭 시 (수정/새로추가)
// let addNotice = [];
// let registerBtn = document.querySelector(".registerBtn");
// registerBtn.addEventListener('click', register);

// function register() {
//   let contents = document.querySelector(".contents").value;

//   if (contents.length > 0) {
//     if (isModifying) { // 수정 시
//       const list = document.getElementById("notice_list")
//       console.log('list', list)
//       const target = list.children[selectedContentIndex]
//       console.log("target", target);

//       const modifyBtn = document.createElement("button");
//       modifyBtn.addEventListener("click", () => {
//         isModifying = true;
//         selectedContentIndex = selectedContentIndex;
//         const contentValue = document.querySelector("#contents");
//         console.log("index", selectedContentIndex);
//         notice.style.display = "block"
//         console.log("target2", target);
//         contentValue.value = target.textContent
//       })
//       modifyBtn.innerText = "수정"
//       const deleteBtn = document.createElement("button");
//       deleteBtn.addEventListener("click", () => {
//         list.children[selectedContentIndex].remove();
//         showNotice();
//         addNotice.splice(selectedContentIndex, 1);
//       })
//       deleteBtn.innerText = "삭제"

//       console.log('index@', selectedContentIndex, addNotice)
//       target.innerText = `${getTime()} ${contents}`

//       addNotice[selectedContentIndex] = contents;

//       target.appendChild(modifyBtn);
//       target.appendChild(deleteBtn);
//       isModifying = false;
//     } else { // 새로 추가 시
//       addNotice.unshift(contents);
//       showNotice();
//     }
//     document.querySelector(".contents").value = "";
//     notice.style.display = "none";
//   }
// }

// // 수정버튼 클릭시
// let isModifying = false;
// let selectedContentIndex = null;

// function showNotice() {
//   let notice = document.querySelector(".notice");
//   const noticeContainer = document.querySelector(".addNotice");
//   if (noticeContainer.children.length > 0) {
//     for (let i = 0; i < noticeContainer.children.length; i++) {
//       noticeContainer.children[i].remove();
//     }
//   }
//   const list = document.createElement("div");
//   list.id = "notice_list"
//   addNotice.forEach((text, index) => {
//     const p = document.createElement("p");
//     p.id = "add" // == p.setAttribute("id", "add")
//     p.classList.add("add");

//     const modifyBtn = document.createElement("button");
//     modifyBtn.addEventListener("click", () => {
//       isModifying = true;
//       selectedContentIndex = index;
//       const contents = document.querySelector("#contents");
//       console.log("index", index);
//       notice.style.display = "block"
//       contents.value = text
//     })
//     modifyBtn.innerText = "수정"
//     const deleteBtn = document.createElement("button");
//     deleteBtn.addEventListener("click", () => {
//       document.getElementById("notice_list").children[index].remove();
//       showNotice();
//       addNotice.splice(index, 1);
//     })
//     deleteBtn.innerText = "삭제"
//     console.log("text", text);
//     p.innerHTML = `${getTime()} ${text}`
//     p.appendChild(modifyBtn);
//     p.appendChild(deleteBtn);
//     list.appendChild(p);
//   })
//   noticeContainer.appendChild(list);
// }
