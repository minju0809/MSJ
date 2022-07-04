// 이전 버튼 // 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.addEventListener("click", () => {
  prevBtn.onclick = history.back();
});

// 이미지 변경하기
let bigPic = document.querySelector(".big");
let smallPics = document.querySelectorAll(".small");

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].onclick = showBig;
}

function showBig() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}