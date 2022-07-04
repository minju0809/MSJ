// 이전 버튼 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}

// snow - 다른 코드와 함께 작동하지 않음
function createSnow() {
  const el = document.createElement('div');
  el.classList.add('snow');
  // el.style.position ="absolute";
  // el.style.top = "0px";
  // el.style.left = "0px";  
  el.style.marginLeft = randomPosition() + 'px';
  document.body.appendChild(el);
}

function randomPosition() {
  return Math.floor(Math.random() * window.innerWidth);
}

for (let i = 0; i < 200; i++) {
  createSnow();
}