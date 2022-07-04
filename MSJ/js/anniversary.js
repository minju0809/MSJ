// 이전 버튼 // 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.addEventListener("click", () => {
    prevBtn.onclick = history.back();
})

// anniversary
var now = new Date();
var firstDay = new Date("2022-01-31");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

