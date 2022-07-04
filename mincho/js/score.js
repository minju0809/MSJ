// 이전 버튼 // 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}
// prevBtn.addEventListener("click", () => {
//   history.back();
// })

// SCORE //
let left = document.querySelector("#leftScore");
let right = document.querySelector("#rightScore");
let leftScore = left.innerHTML;
let rightScore = right.innerHTML;
let leftClickCheck = 0;
let rightClickCheck = 0;

function handleScore(direction) {
  // console.log("direction", direction) // left, right 중 어느쪽 눌렸는지 확인
  if (direction == "left") {
    leftClickCheck++;
    let timer = setTimeout(() => {
      // console.log("reset") // timer reset 확인
      if (leftClickCheck == 1) {
        left.innerHTML = ++leftScore;
      }
      leftClickCheck = 0;
    }, 200);

    if (leftClickCheck == 2) {
      // console.log("left double click"); 
      clearTimeout(timer)
      if (leftScore > 0) {
        left.innerHTML = --leftScore;
      }
      leftClickCheck = 0;
    }
  } else if (direction == "right") {
    rightClickCheck++;
    let timer = setTimeout(() => {
      if(rightClickCheck == 1) {
        right.innerHTML = ++rightScore;
      }
      rightClickCheck = 0;
    }, 200);

    if (rightClickCheck == 2) {
      clearTimeout(timer)
      if (rightScore > 0) {
        right.innerHTML = --rightScore;
      }
      rightClickCheck = 0;
    }
  }
}