// header logo 자동 이미지 슬라이드
let index = 0;
window.onload = function () {
  slideShow();
}

function slideShow() {
  let i;
  let x = document.getElementsByClassName("headerLogo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  index++;

  if (index > x.length) {
    index = 1;
  }

  x[index-1].style.display = 'block';
  setTimeout(slideShow, 1500);
}

// 화면 작을 때, logoMenu 보이게 하기  
const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.logoMenu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Timer
setInterval(()=>{
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // convert 24hr clock to 12hr clock
  if (h>12) {
    h = h - 12;
  }

  // add zero before single digit number
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hours.innerHTML = h + '<br><span>Hours</span>';
  minutes.innerHTML = m + '<br><span>Minutes</span>';
  seconds.innerHTML = s + '<br><span>Seconds</span>';
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12; 
  // 12 hrs clock
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 munutes
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  // 60 seconds

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360 / 12 = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  // 360 / 60 = 6
})

// 체육관 찾기 버튼 click 시 find.html로 연결
const bodyBtn1 = document.querySelector("#bodyBtn1");

bodyBtn1.onclick = () => {
  window.location.href = "find.html"
}

// CSS 연습 버튼 click 시 score.html로 연결
const bodyBtn2 = document.querySelector("#bodyBtn2");

bodyBtn2.onclick = () => {
  window.location.href = "score.html"
}

// Dash Board 버튼 click 시 dashboard.html로 연결
const bodyBtn3 = document.querySelector("#bodyBtn3");

bodyBtn3.onclick = () => {
  window.location.href = "./dashboard.html"
}

// 공지사항 버튼 click 시 notice.html로 연결
const bodyBtn4 = document.querySelector("#bodyBtn4");

bodyBtn4.onclick = () => {
  window.location.href = "notice.html"
}


