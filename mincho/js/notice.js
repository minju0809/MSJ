// 이전 버튼 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}

// 추가 버튼
const addBtn = document.querySelector(".addBtn");
let notice = document.querySelector(".notice");

addBtn.addEventListener("click", () => {
  notice.style.display = "block";
});

// 등록 버튼 클릭 시 (수정/새로추가)
let addNotice = [];
let registerBtn = document.querySelector(".registerBtn");
registerBtn.addEventListener('click', register);

function register() {
  let contents = document.querySelector(".contents").value;

  if (contents.length > 0) {
    if (isModifying) { // 수정 시
      const list = document.getElementById("notice_list")
      console.log('list', list)
      const target = list.children[selectedContentIndex]
      console.log("target", target);

      const modifyBtn = document.createElement("button");
      modifyBtn.addEventListener("click", () => {
        isModifying = true;
        selectedContentIndex = selectedContentIndex;
        const contentValue = document.querySelector("#contents");
        console.log("index", selectedContentIndex);
        notice.style.display = "block"
        console.log("target2", target);
        contentValue.value = target.textContent
      })
      modifyBtn.innerText = "수정"
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", () => {
        list.children[selectedContentIndex].remove();
        showNotice();
        addNotice.splice(selectedContentIndex, 1);
      })
      deleteBtn.innerText = "삭제"

      console.log('index@', selectedContentIndex, addNotice)
      target.innerText = `${getTime()} ${contents}`

      addNotice[selectedContentIndex] = contents;

      target.appendChild(modifyBtn);
      target.appendChild(deleteBtn);
      isModifying = false;
    } else { // 새로 추가 시 
      addNotice.unshift(contents);
      showNotice();
    }
    document.querySelector(".contents").value = "";
    notice.style.display = "none";
  }
}

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

// 수정버튼 클릭시
let isModifying = false;
let selectedContentIndex = null;

function showNotice() {
  let notice = document.querySelector(".notice");
  const noticeContainer = document.querySelector(".addNotice");
  if (noticeContainer.children.length > 0) {
    for (let i = 0; i < noticeContainer.children.length; i++) {
      noticeContainer.children[i].remove();
    }
  }
  const list = document.createElement("div");
  list.id = "notice_list"
  addNotice.forEach((text, index) => {
    const p = document.createElement("p");
    p.id = "add" // == p.setAttribute("id", "add")
    p.classList.add("add");

    const modifyBtn = document.createElement("button");
    modifyBtn.addEventListener("click", () => {
      isModifying = true;
      selectedContentIndex = index;
      const contents = document.querySelector("#contents");
      console.log("index", index);
      notice.style.display = "block"
      contents.value = text
    })
    modifyBtn.innerText = "수정"
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => {
      document.getElementById("notice_list").children[index].remove();
      showNotice();
      addNotice.splice(index, 1);
    })
    deleteBtn.innerText = "삭제"
    console.log("text", text);
    p.innerHTML = `${getTime()} ${text}`
    p.appendChild(modifyBtn);
    p.appendChild(deleteBtn);
    list.appendChild(p);
  })
  noticeContainer.appendChild(list);
}



