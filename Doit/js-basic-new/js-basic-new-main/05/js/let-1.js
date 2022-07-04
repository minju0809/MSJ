// function calcSum(n) {
//   let sum = 0;  // 블록 변수

//   for(let i = 1; i < n + 1; i++) {
//     sum += i;
//   }
//   console.log(i, sum);  // 블록 변수 사용
// }

// calcSum(10);
// var sum = 0;
// function calcSum() {
//   var sum = 4;
//   console.log(sum);
//   sum = 3;
//   // for(let i = 1; i < n + 1; i++) {
//     //   sum += i;
//     // }
//     // console.log(i, sum);  // 블록 변수 사용
//   }

//   calcSum();
// console.log(sum);  // 블록 변수 사용

let add = (function (n1, n2) { 
  let sum = n1 + n2;
  console.log(sum);
  return sum;
}(4,4));
// add(1, 2)
console.log(add);
// let x = parseInt(prompt("첫 번째 숫자: "));
// let y = parseInt(prompt("두 번째 숫자: "));

