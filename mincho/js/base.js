// 이전 버튼 
// const prevBtn = document.querySelector(".prevBtn");

// prevBtn.onclick = () => {
//   history.back();
// }

// 화면 작을 때, logoMenu 보이게 하기  
// const toggleBtn = document.querySelector('.toggleBtn');
// const menu = document.querySelector('.logoMenu');

// toggleBtn.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// 화이트모드, 다크모드 변경하기
const themeToggler = document.querySelector(".theme-toggler");

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// 변경 전 사용했던 다크모드 함수
  // // 바디 글자색 바꾸기
  // // function BodySetColor(color) {
  // //   document.querySelector('body').style.color = color;
  // // }

  // // 바디버튼 글자색 바꾸기
  // function BodyBtnSetColor(color) {
  //   let bodyBtn = document.getElementsByClassName('bodyBtn');
  //   for(let i=0; i<bodyBtn.length; i++) {
  //       bodyBtn[i].style.color = color;
  //     }
  // }

  // // 바디 배경색 바꾸기
  // function BodySetBackgroundColor(color) {
  //   document.querySelector('body').style.backgroundColor = color;
  // }

  // // 바디버튼 배경색 바꾸기
  // function BodyBtnSetBackgroundColor(color) {
  //   let bodyBtn = document.getElementsByClassName('bodyBtn');
  //   for(let i=0; i<bodyBtn.length; i++) {
  //     bodyBtn[i].style.backgroundColor = color;
  //   }
  // }

  // // 주간, 야간 모드
  // function day_night_handler(self) {
  //   // let target = document.querySelector('body');
  //   if(self.value == 'day') {
  //     // 야간 모드
  //     BodySetColor('white');
  //     BodyBtnSetColor('white');
  //     BodySetBackgroundColor('rgb(39, 58, 93)');
  //     BodyBtnSetBackgroundColor('modeBtn');
  //     self.value = 'night';
  //   } else {
  //     // 주간 모드
  //     BodySetColor('black');
  //     BodyBtnSetColor('rgba(65, 13, 13, 0.979)');
  //     BodySetBackgroundColor('white');
  //     BodyBtnSetBackgroundColor('aliceblue');
  //     self.value = 'day';
  //   }
  // }