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
  const filterGym = gymList.filter((gym) => gym.includes(findGym.value));
  let list = document.createElement("li");
  if (!findGym.value) {
    alert("찾으려는 지역을 입력해 주세요!");
    findGym.focus();
  } else if (findGym.value == '서울' || '김포') { 
    list.innerText = filterGym;
    result.appendChild(list);
    findGym.value = "";
    findGym.focus();
  } else if (findGym.value !== filterGym) {
  alert('해당 지역에는 등록 체육관이 없습니다');
  }
});
