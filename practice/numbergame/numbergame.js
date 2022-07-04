
function guess() {
  let num1 = document.getElementById("user").value;
  if (num1 == "") {
    alert('숫자를 입력하세요');
  } else if (num1 == ran) {
    let area = document.getElementById('area');
    area.innerHTML = "정답입니다.";
  } else {
    if (ran > num1) {
      document.getElementById('result').value = (num1 + `보다 큽니다.`);
    } else {
      document.getElementById('result').value = (num1 + '보다 작습니다.');
    }
  }
  document.getElementById("guesses").value = ("시도한 횟수는" + (count++) + "번 입니다.");
}

function gameReset() {
  ran = Math.floor(Math.random() * 100 + 1);
  count = 1;
  document.getElementById("area").innerHTML = "";
  document.getElementById("result").value = "";
  document.getElementById("guesses").value = "";
  document.getElementById("user").value = "";
}

window.onload = function() {
  document.getElementById("resetbtn").addEventListener('click', function() {
    gameReset();
  });
  gameReset();
}
