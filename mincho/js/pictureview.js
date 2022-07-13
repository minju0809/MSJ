// 이전 버튼 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  // let dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" w3-red", "");
    // dots[i].className = dots[i].className.replace(" w3-border-red", "");

  // }
  x[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " w3-red";
  // dots[slideIndex - 1].className += " w3-border-red";
}
