// icon 눌렀을 때 사진 바뀌기
let icon = document.querySelector("#icon");
icon.addEventListener("mouseover", changeIcon, false);
icon.addEventListener("mouseout", originIcon, false);

function changeIcon() {
  icon.src = "/images/images/MJS/0 header2.jpg";
}

function originIcon() {
  icon.src = "/images/images/MJS/0 header1.jpg";
}

// 햄버거 눌렀을 때 메뉴바 나왔다가 사라지게
const toggleBtn = document.querySelector(".btnImg");
const menu = document.querySelector(".headerMenu");
const link = document.querySelector(".headerLink");
let menus = document.querySelectorAll(".menus");
let arrow = document.querySelector(".arrow");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle('active');
  link.classList.toggle('active');
})


for (let i = 0; i < menus.length; i++) {
  const arrow = menus[i].querySelector("#arrow");
  menus[i].addEventListener("mouseover", () => {
    arrow.style.display = "block";
    arrow.style.transition = "0.5s";
    menus[i].style.transition = "0.5s";
    menus[i].style.color = "yellow";
  });
  menus[i].addEventListener("mouseout", function () {
    arrow.style.display = "none";
    menus[i].style.color = "white";
  });
}

// body1 화살표 이미지 슬라이드
let index1 = 0;
window.onload = function () {
  slideShow1();
}

function slideShow1() {
  let i;
  let x = document.getElementsByClassName("autoSlide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  index1++;

  if (index1 > x.length) {
    index1 = 1;
  }

  x[index1-1].style.display = 'block';
  setTimeout(slideShow1, 2000);
}

// body2 자동 이미지 슬라이드
let index2 = 0;
window.addEventListener('load', function() {
  slideShow2();
});

function slideShow2() {
  let j;
  let y = document.getElementsByClassName("autoSlide2");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = 'none';
  }
  index2++;

  if (index2 > y.length) {
    index2 = 1;
  }

  y[index2-1].style.display = 'block';
  setTimeout(slideShow2, 2000);
}
