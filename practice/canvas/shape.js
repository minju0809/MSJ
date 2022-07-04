function exeAllFunction() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // window.addEventListener("resize", () => {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   console.log("창 크기가 달라졌습니다")
    //   draw();
    //   ctx.fillStyle = 'green';
    //   ctx.fillRect(300,10,150,150);
    // })
    
  ctx.fillStyle = 'green';
  ctx.fillRect(300,10,150,150);
  draw();
  // window.addEventListener("mousedown", startPainting)
  // window.addEventListener("mousemove", onMouseMove)
  // window.addEventListener("mouseup", stopPainting)
}

function draw() {
  let canvas = document.getElementById("canvas");
  if(canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0,0.5)";
    ctx.fillRect(10,10,50,50);

    ctx.fillStyle = "rgb(0,0,200,0.5)";
    ctx.fillRect(40,40,50,50);

    ctx.fillStyle = "rgb(500,500,0,0.5)";
    ctx.fillRect(10,40,50,50);

    ctx.fillStyle = "rgb(100,100,0,0.5)";
    ctx.fillRect(40,10,50,50);

    // 펜 이동하여 삼각형 그리기
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(125, 75);
    ctx.lineTo(125, 25);
    ctx.fill();

    // 펜 이동하여 스마일 그리기
    ctx.beginPath();
    ctx.arc(75, 175, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 175);
    ctx.arc(75, 175, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 165);
    ctx.arc(60, 165, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 165);
    ctx.arc(90, 165, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    // 선 그리기
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(150, 25);
    ctx.lineTo(225, 25);
    ctx.lineTo(150, 105);
    ctx.fill();
    // Stroked triangle 
    ctx.beginPath();
    ctx.moveTo(250, 125);
    ctx.lineTo(250, 45);
    ctx.lineTo(170, 125);
    ctx.closePath();
    ctx.stroke();

    // Quadratric curves example 말풍선
    ctx.beginPath();
    ctx.moveTo(75, 225);
    ctx.quadraticCurveTo(25, 225, 25, 262.5);
    ctx.quadraticCurveTo(25, 300, 50, 300);
    ctx.quadraticCurveTo(50, 320, 30, 325);
    ctx.quadraticCurveTo(60, 320, 65, 300);
    ctx.quadraticCurveTo(125, 300, 125, 262.5);
    ctx.quadraticCurveTo(125, 225, 75, 225);
    ctx.stroke();

    // Cubic curves example 하트
    ctx.beginPath();
    ctx.moveTo(275, 240);
    ctx.bezierCurveTo(275, 237, 270, 225, 250, 225);
    ctx.bezierCurveTo(220, 225, 220, 262.5, 220, 262.5);
    ctx.bezierCurveTo(220, 280, 240, 302, 275, 320);
    ctx.bezierCurveTo(310, 302, 330, 280, 330, 262.5);
    ctx.bezierCurveTo(330, 262.5, 330, 225, 300, 225);
    ctx.bezierCurveTo(285, 225, 275, 237, 275, 240);
    ctx.fill();

    }
  }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.width = 700;
// canvas.height = 700;

// ctx.strokeStyle = "blue";
// ctx.lineWidth = 25;
// ctx.lineCap = "round";  // onload 시 위 함수 새로 가져오면서 적용 X

let painting = false;

function startPainting(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  ctx.beginPath();
  ctx.moveTo(x,y);
  painting = true;
}

function stopPainting() {
  ctx.closePath();
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    return;
  }
  ctx.lineTo(x,y);
  ctx.stroke();
}

window.addEventListener("mousedown", startPainting)
window.addEventListener("mousemove", onMouseMove)
window.addEventListener("mouseup", stopPainting)



     // 구 그리는 코드
    // let i=0;
    //     function setup() {
    //       createCanvas(500,400,WEBGL);
    //     }
    //     function draw() {
    //       background('#AADD00');
    //       rotateX(-0.9);
    //       rotateY(i += 0.01);
    //       sphere(150,24,24);
    //     }

// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     for (var i = 0; i < 4; i++) {
//       for (var j = 0; j < 3; j++) {
//         ctx.beginPath();
//         var x = 25 + j * 50; // x coordinate
//         var y = 25 + i * 50; // y coordinate
//         var radius = 20; // Arc radius
//         var startAngle = 0; // Starting point on circle
//         var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//         var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

//         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

//         if (i > 1) {
//           ctx.fill();
//         } else {
//           ctx.stroke();
//         }
//       }
//     }
//   }
// }

// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     roundedRect(ctx, 12, 12, 150, 150, 15);
//     roundedRect(ctx, 19, 19, 150, 150, 9);
//     roundedRect(ctx, 53, 53, 49, 33, 10);
//     roundedRect(ctx, 53, 119, 49, 16, 6);
//     roundedRect(ctx, 135, 53, 49, 33, 10);
//     roundedRect(ctx, 135, 119, 25, 49, 10);

//     ctx.beginPath();
//     ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
//     ctx.lineTo(31, 37);
//     ctx.fill();

//     for (var i = 0; i < 8; i++) {
//       ctx.fillRect(51 + i * 16, 35, 4, 4);
//     }

//     for (i = 0; i < 6; i++) {
//       ctx.fillRect(115, 51 + i * 16, 4, 4);
//     }

//     for (i = 0; i < 8; i++) {
//       ctx.fillRect(51 + i * 16, 99, 4, 4);
//     }

//     ctx.beginPath();
//     ctx.moveTo(83, 116);
//     ctx.lineTo(83, 102);
//     ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//     ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
//     ctx.lineTo(111, 116);
//     ctx.lineTo(106.333, 111.333);
//     ctx.lineTo(101.666, 116);
//     ctx.lineTo(97, 111.333);
//     ctx.lineTo(92.333, 116);
//     ctx.lineTo(87.666, 111.333);
//     ctx.lineTo(83, 116);
//     ctx.fill();

//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.moveTo(91, 96);
//     ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//     ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//     ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
//     ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//     ctx.moveTo(103, 96);
//     ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
//     ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
//     ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
//     ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
//     ctx.fill();

//     ctx.fillStyle = 'black';
//     ctx.beginPath();
//     ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();
//   }
// }

// A utility function to draw a rectangle with rounded corners.

// function roundedRect(ctx, x, y, width, height, radius) {
//   ctx.beginPath();
//   ctx.moveTo(x, y + radius);
//   ctx.lineTo(x, y + height - radius);
//   ctx.arcTo(x, y + height, x + radius, y + height, radius);
//   ctx.lineTo(x + width - radius, y + height);
//   ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
//   ctx.lineTo(x + width, y + radius);
//   ctx.arcTo(x + width, y, x + width - radius, y, radius);
//   ctx.lineTo(x + radius, y);
//   ctx.arcTo(x, y, x, y + radius, radius);
//   ctx.stroke();
// }

// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     var rectangle = new Path2D();
//     rectangle.rect(10, 10, 50, 50);

//     var circle = new Path2D();
//     circle.moveTo(125, 35);
//     circle.arc(100, 35, 25, 0, 2 * Math.PI);

//     ctx.stroke(rectangle);
//     ctx.fill(circle);
//   }
// }

// fillStyle 예제

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   for (var i = 0; i < 6; i++){
//     for (var j = 0; j < 6; j++){
//       ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
//                        Math.floor(255 - 42.5 * j) + ', 0)';
//       ctx.fillRect(j*25,i*25,25,25);
//     }
//   }
// }

// strokeStyle 예제

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
//                        Math.floor(255 - 42.5 * j) + ')';
//       ctx.beginPath();
//       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
//       ctx.stroke();
//     }
//   }
// }

// 투명도 globalAlpha = transparencyValue
// 외곽선과 채움 스타일에 투명 적용
// 설정하는 값은 0.0(완전히 투명)과 1.0(완전히 불투명) 사이에 있어야 하며, 
// 초기 설정값은 1.0(완전히 투명)

// ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

// globalAlpha 예제

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   // 배경을 그린다
//   ctx.fillStyle = '#FD0';
//   ctx.fillRect(0, 0, 75, 75);
//   ctx.fillStyle = '#6C0';
//   ctx.fillRect(75, 0, 75, 75);
//   ctx.fillStyle = '#09F';
//   ctx.fillRect(0, 75, 75, 75);
//   ctx.fillStyle = '#F30';
//   ctx.fillRect(75, 75, 75, 75);
//   ctx.fillStyle = '#FFF';

//   // 투명값을 설정한다
//   ctx.globalAlpha = 0.2;

//   // 반투명한 원을 그린다
//   for (var i = 0; i < 7; i++){
//     ctx.beginPath();
//     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//     ctx.fill();
//   }
// }

// rgba()를 사용한 예제

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');

//   // 배경을 그린다
//   ctx.fillStyle = 'rgb(255,221,0)';
//   ctx.fillRect(0,0,150,37.5);
//   ctx.fillStyle = 'rgb(102,204,0)';
//   ctx.fillRect(0,37.5,150,37.5);
//   ctx.fillStyle = 'rgb(0,153,255)';
//   ctx.fillRect(0,75,150,37.5);
//   ctx.fillStyle = 'rgb(255,51,0)';
//   ctx.fillRect(0,112.5,150,37.5);

//   // 반투명한 사각형을 그린다
//   for (var i=0;i<10;i++){
//     ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
//     for (var j=0;j<4;j++){
//       ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
//     }
//   }
// }

// 기본 애니메이션 수행 >>>>>>> 오류

// var ctx = document.getElementById('canvas').getContext('2d');
// var offset = 0;

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.setLineDash([4, 2]);
//   ctx.lineDashOffset = -offset;
//   ctx.strokeRect(10, 10, 100, 100);
// }

// function march() {
//   offset++;
//   if (offset > 16) {
//     offset = 0;
//   }
//   draw();
//   setTimeout(march, 20);
// }

// march();

// clip 예제 별 그리기 (잘라내기)

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   ctx.fillRect(0,0,150,150);
//   ctx.translate(75,75);

//   // 동그란 모양의 잘라내기 경로를 생성한다
//   ctx.beginPath();
//   ctx.arc(0,0,60,0,Math.PI*2,true);
//   ctx.clip();

//   // 배경을 그린다
//   var lingrad = ctx.createLinearGradient(0,-75,0,75);
//   lingrad.addColorStop(0, '#232256');
//   lingrad.addColorStop(1, '#143778');

//   ctx.fillStyle = lingrad;
//   ctx.fillRect(-75,-75,150,150);

//   // 별을 그린다
//   for (var j=1;j<50;j++){
//     ctx.save();
//     ctx.fillStyle = '#fff';
//     ctx.translate(75-Math.floor(Math.random()*150),
//                   75-Math.floor(Math.random()*150));
//     drawStar(ctx,Math.floor(Math.random()*4)+2);
//     ctx.restore();
//   }

// }

// function drawStar(ctx,r){
//   ctx.save();
//   ctx.beginPath()
//   ctx.moveTo(r,0);
//   for (var i=0;i<9;i++){
//     ctx.rotate(Math.PI/5);
//     if(i%2 == 0) {
//       ctx.lineTo((r/0.525731)*0.200811,0);
//     } else {
//       ctx.lineTo(r,0);
//     }
//   }
//   ctx.closePath();
//   ctx.fill();
//   ctx.restore();
// }
 
// 태양계 애니메이션 >>>>>> 작동 잘 안함(이미지문제?)

// var sun = new Image();
// var moon = new Image();
// var earth = new Image();
// function init(){
//   sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
//   moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
//   earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
//   setInterval(draw,100);
// }

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');

//   ctx.globalCompositeOperation = 'destination-over';
//   ctx.clearRect(0,0,300,300); // 캔버스를 비운다

//   ctx.fillStyle = 'rgba(0,0,0,0.4)';
//   ctx.strokeStyle = 'rgba(0,153,255,0.4)';
//   ctx.save();
//   ctx.translate(150,150);

//   // 지구
//   var time = new Date();
//   ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
//   ctx.translate(105,0);
//   ctx.fillRect(0,-12,50,24); // Shadow
//   ctx.drawImage(earth,-12,-12);

//   // 달
//   ctx.save();
//   ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
//   ctx.translate(0,28.5);
//   ctx.drawImage(moon,-3.5,-3.5);
//   ctx.restore();

//   ctx.restore();

//   ctx.beginPath();
//   ctx.arc(150,150,105,0,Math.PI*2,false); // 지구 궤도
//   ctx.stroke();

//   ctx.drawImage(sun,0,0,300,300);
// }

// 시계 애니메이션 html > clock()으로 변경해야 함


// function init(){
//   clock();
//   setInterval(clock,1000);
// }

// function clock(){
//   var now = new Date();
//   var ctx = document.getElementById('canvas').getContext('2d');
//   ctx.save();
//   ctx.clearRect(0,0,150,150);
//   ctx.translate(75,75);
//   ctx.scale(0.4,0.4);
//   ctx.rotate(-Math.PI/2);
//   ctx.strokeStyle = "black";
//   ctx.fillStyle = "white";
//   ctx.lineWidth = 8;
//   ctx.lineCap = "round";

//   // 시계판 - 시
//   ctx.save();
//   for (var i=0;i<12;i++){
//     ctx.beginPath();
//     ctx.rotate(Math.PI/6);
//     ctx.moveTo(100,0);
//     ctx.lineTo(120,0);
//     ctx.stroke();
//   }
//   ctx.restore();

//   // 시계판 - 분
//   ctx.save();
//   ctx.lineWidth = 5;
//   for (i=0;i<60;i++){
//     if (i%5!=0) {
//       ctx.beginPath();
//       ctx.moveTo(117,0);
//       ctx.lineTo(120,0);
//       ctx.stroke();
//     }
//     ctx.rotate(Math.PI/30);
//   }
//   ctx.restore();

//   var sec = now.getSeconds();
//   var min = now.getMinutes();
//   var hr  = now.getHours();
//   hr = hr>=12 ? hr-12 : hr;

//   ctx.fillStyle = "black";

//   // 시간 표시 - 시
//   ctx.save();
//   ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
//   ctx.lineWidth = 14;
//   ctx.beginPath();
//   ctx.moveTo(-20,0);
//   ctx.lineTo(80,0);
//   ctx.stroke();
//   ctx.restore();

//   // 시간 표시 - 분
//   ctx.save();
//   ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
//   ctx.lineWidth = 10;
//   ctx.beginPath();
//   ctx.moveTo(-28,0);
//   ctx.lineTo(112,0);
//   ctx.stroke();
//   ctx.restore();

//   // 시간 표시 - 초
//   ctx.save();
//   ctx.rotate(sec * Math.PI/30);
//   ctx.strokeStyle = "#D40000";
//   ctx.fillStyle = "#D40000";
//   ctx.lineWidth = 6;
//   ctx.beginPath();
//   ctx.moveTo(-30,0);
//   ctx.lineTo(83,0);
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.arc(0,0,10,0,Math.PI*2,true);
//   ctx.fill();
//   ctx.beginPath();
//   ctx.arc(95,0,10,0,Math.PI*2,true);
//   ctx.stroke();
//   ctx.fillStyle = "rgba(0,0,0,0)";
//   ctx.arc(0,0,3,0,Math.PI*2,true);
//   ctx.fill();
//   ctx.restore();

//   ctx.beginPath();
//   ctx.lineWidth = 14;
//   ctx.strokeStyle = '#325FA2';
//   ctx.arc(0,0,142,0,Math.PI*2,true);
//   ctx.stroke();

//   ctx.restore();
// }