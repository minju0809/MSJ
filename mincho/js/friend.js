// 이전 버튼 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}

// 등록 버튼 클릭 시 추가 및 삭제
let info = document.querySelector('.info');
let registerBtn = document.querySelector('.registerBtn');
let addFriend = document.querySelector('.addFriend');

registerBtn.addEventListener('click', function () {
  let list = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let deleteBtnText = document.createTextNode('삭제');
  if (!info.value) {
    alert('이름을 입력해 주세요!');
  } else {
    list.innerText = info.value;
    addFriend.appendChild(list);
    list.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteBtnText);
    info.value = "";
  }
  deleteBtn.addEventListener('click', function () {
    addFriend.removeChild(list);
  })
})
