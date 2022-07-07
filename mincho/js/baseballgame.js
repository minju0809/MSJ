// 이전 버튼 // 
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
}

let nums;
let num_ary;
let result = document.getElementById('result');
let answer_form = document.getElementById('answer_form');
let answer = document.querySelectorAll('#answer');
let wrongAnswerNumber = 0;
const finish = document.querySelector(".finish");

// 문제 생성
const make_Question = () => {
  nums = [1,2,3,4,5,6,7,8,9];
  num_ary = [];
  for(let i=0; i<4; i+=1) {
    let outed = nums.splice(Math.floor(Math.random()*(9-i)),1)[0];
    num_ary.push(outed);
  }
}

make_Question();
console.log(num_ary);


let inputEvent = document.querySelectorAll('#answer');
inputEvent.forEach((input, index) => {
  input.onkeyup = function(e) {
    // 숫자 입력 시에만 작용하게 
    if(e.target.value==""||isNaN(e.target.value)) {
      e.target.value="";
      return;
    }
    if(index < inputEvent.length - 1) {
      inputEvent[index+1].focus()
    };
  };
});

answer_form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let inputValue1 = document.querySelector('.input1').value;
  let inputValue2 = document.querySelector('.input2').value;
  let inputValue3 = document.querySelector('.input3').value;
  let inputValue4 = document.querySelector('.input4').value;
  if(inputValue1==""||inputValue2==""||inputValue3==""||inputValue4==""){
    alert("4자리 모두 입력해주세요.");
    return;
  }
  let temp = [];
  
  for(let j=0;j<4;j++) {
    finish.style.display = 'none';
    temp[j] = answer[j].value;
  }
  if(temp.join("") === num_ary.join("")) {
    let strike = 4; 
    let ball = 0;
    wrongAnswerNumber += 1;
  
    let template = `<div class="try">
    ${wrongAnswerNumber}번째 ( ${strike}S, ${ball}B - 입력한 숫자 ${inputValue1} ${inputValue2} ${inputValue3} ${inputValue4})
    </div>`
  
    document.querySelector('body').insertAdjacentHTML
    ('beforeend', template);

    finish.style.display = "block";
    for(let i=0;i<4;i++) {
      answer[i].value = "";
    }
    // template = 0; 
    // 성공 후 새 게임 시작 숫자 입력 시 입력했던 값 사라지게
    answer[0].focus();
    make_Question(); 
    console.log(num_ary);
    wrongAnswerNumber = 0;
    let tries = document.querySelectorAll(".try");
    console.log(tries);
    for(i=0; i<tries.length; i++) {
      tries[i].remove();
    }
    // result.value = "none";
    // submit = "history.back();"
  } else {
    let strike = 0;
    let ball = 0;
    wrongAnswerNumber += 1;
    for(let i=0;i<4;i+=1) {
      answer[i].value = "";
      if(Number(temp[i]) === num_ary[i]) {
        strike += 1;
      } else if (num_ary.indexOf(Number(temp[i])) > -1) {
        ball += 1;
      }
    }

    // result.textContent = wrongAnswerNumber + '번째 ' + strike + 'strike ' + ball + ' ball ';
    answer[0].focus();
    
    let template = `<div class="try">
    ${wrongAnswerNumber}번째 ( ${strike}S, ${ball}B - 입력한 숫자 ${inputValue1} ${inputValue2} ${inputValue3} ${inputValue4})
    </div>`
  
    document.querySelector('body').insertAdjacentHTML
    ('beforeend', template);
  }

});








