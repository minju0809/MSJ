// 추가 버튼
let addBtn = document.querySelector("#addBtn");
let notice = document.querySelector("#notice");

addBtn.addEventListener("click", () => {
  notice.style.display = "block";
})

let addNotice = [];
let registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", register);
// 수정버튼 클릭시
let isModifying = false;
let selectedContentIndex = null;

function register() {
  let contents = document.querySelector("#contents").value;

  if (contents != "") {
    if (isModifying) {
      // let addNotice = document.querySelector(".addNotice");
      // let li = doucment.getElementsByTagName("li");
      // console.log(li);
      console.log('addNotice', addNotice) // 등록 된 공지사항 모두 가져옴

      // const list = document.getElementById("notice_list")
      // console.log('list', list)
      // const target = list.children[selectedContentIndex]
      // console.log("target", target);

      let modBtn = document.querySelector("#modBtn");
      modBtn.addEventListener("click", () => {
        isModifying = true;
        notice.style.display = "block"
        // selectedContentIndex = selectedContentIndex;
        // const contentValue = document.querySelector("#contents");
        // console.log("index", selectedContentIndex);
        // console.log("target2", target);
        // contentValue.value = target.textContent
      })
      // console.log('index@', selectedContentIndex, addNotice)
      // target.innerText = `${getTime()} ${contents}`
      // addNotice[selectedContentIndex] = contents;
      isModifying = false;
    } else {
      addNotice.unshift(contents);
      showNotice();
    }
    document.querySelector("#contents").value = "";
    notice.style.display = "none";
  }
}

// function getTime() {
//   let today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let date = today.getDate();
//   let dayName = today.toLocaleDateString('ko-KR', { weekday: 'short' });
//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   return `${year}/${month}/${date}/${dayName} ${hours}:${minutes}`
// }

function showNotice() {
  // showNotice 안에 있을 경우, 등록할 때의 시간으로 모두 변경, 밖에 있을 경우, 처음 등록한 시간으로 모두 작성됨
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let dayName = today.toLocaleDateString('ko-KR', { weekday: 'short' });
  let hours = today.getHours();
  let minutes = today.getMinutes();

  let list = "<div>";
  for (let i = 0; i < addNotice.length; i++) {
    list += "<p class='add'>" + `${year}/${month}/${date}/${dayName} ${hours}:${minutes} ` + "<span class='noticeList' id=" + i + ">" + addNotice[i] +
      "</span><span class='delBtn' id=" + i + ">삭제</span><span class='modBtn' id=" + i + ">수정</span></p>";
  }
  list += "</div>";

  document.querySelector("#addNotice").innerHTML = list;

  // for (let i = 0; i < modBtn.length; i++) {
  //   modBtn[i].addEventListener("click", modNotice);
  // }

  // addNotice.forEach((text, index) => {
  //   let modBtn = document.querySelectorAll(".modBtn");
  //   let p = document.querySelector(".add");
  //   modBtn[0].addEventListener("click", () => {
  //     isModifying = true;
  //     selectedContentIndex = index;
  //     const contents = document.querySelector("#contents");
  //     console.log("index", index);
  //     notice.style.display = "block"
  //     contents.value = text
  //   })
  //   console.log("text", text);
  //   p.innerHTML = `${getTime()} ${text}`
  // })
  let modBtn = document.querySelectorAll(".modBtn");
  for (let i = 0; i < modBtn.length; i++) {
    modBtn[i].addEventListener("click", modNotice);
  }
  
  let delBtn = document.querySelectorAll(".delBtn");
  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener("click", delNotice);
  }
}


function modNotice() {
  isModifying = true;
  notice.style.display = "block";
  // contents.value = text;
  // console.log("text", text);
  // let contents = document.querySelector("#contents");
  // let noticeList = document.querySelector(".noticeList");
  // addNotice = target.innerHTML
  // selectedContentIndex = index;
  // console.log("index", index);
  // contents.value = text
}

function delNotice() {
  let id = this.getAttribute("id");
  addNotice.splice(id, 1);
  showNotice();
}





