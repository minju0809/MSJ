

const log = document.getElementById('log');

document.addEventListener('keyup', logKey);

function logKey(e) {

  if ((e.keyCode > 48 && e.keyCode < 58) || (e.keyCode > 96 && e.keyCode < 106)) {
    log.innerHTML += `${e.code} <hr>`;
  } else {
    log.innerHTML = ""; // 다른 키 입력 시 이전 입력 값 모두 사라짐
  }
}
// document.onkeyup = logKey;

window.onkeyup = (e) => console.log(e.keyCode);