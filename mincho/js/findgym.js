// 이전 버튼
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
};

// 화이트모드, 다크모드 변경하기
const themeToggler = document.querySelector(".theme-toggler");

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

const gymList = ["구로누리배드민턴장(서울)", "영등포체육관(서울)", "챌린지배드민턴구장(김포)"];

let findGym = document.querySelector(".findGym");
let searchBtn = document.querySelector(".searchBtn");
let result = document.querySelector(".result");

// function filterGym(gym) {
//   return gymList.filter((서울) => 서울.indexOf(gym) > -1);
// }
// console.log(filterGym("서울"));
// console.log(filterGym("김포"));

searchBtn.addEventListener("click", function () {
  if (!findGym.value) {
    alert("찾으려는 지역을 입력해 주세요!");
  } else {
    const filterGym = gymList.filter((gym) => gym.includes(findGym.value));
    let list = document.createElement("li");

    if (filterGym.length) {
      list.innerText = filterGym;
    } else {
      list.innerText = alert("입력하신 지역에 등록 체육관이 없습니다.");
      findGym.value = "";
      findGym.focus();
      return;
    }
    result.appendChild(list);
    findGym.value = "";
  }
  findGym.focus();
});
