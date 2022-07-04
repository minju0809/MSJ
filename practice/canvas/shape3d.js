// Get the canvas element from the DOM
const canvas = document.querySelector("#scene");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
// Store the 2D context
const ctx = canvas.getContext('2d');

if (window.devicePixelRatio > 1) {
  canvas.width = canvas.clientWidth * 2;
  canvas.height = canvas.clientHeight * 2;
  ctx.scale(2, 2);
}

// 점 // 
// // VARIABLES
// let width = canvas.clientWidth; // Width of the canvas
// let height = canvas.clientHeight; // Height of the canvas
// let rotation = 0; // Rotation of the globe
// let dots = []; // Every dots in an array

// // Constants
// // Math.floor(Math.random()
// const DOTS_AMOUNT = 1000; // Amount of dots on the screen
// const DOT_RADIUS = 4; // Radius of the dots
// let GLOBE_RADIUS = width * 0.7; // Radius of the globe
// let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
// let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
// let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
// let FIELD_OF_VIEW = width * 0.8;

// class Dot {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;

//     this.xProject = 0;
//     this.yProject = 0;
//     this.sizeProjection = 0;
//   }
//   // Do some math to project the 3D position into the 2D canvas
//   project(sin, cos) {
//     const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
//     const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
//     this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
//     this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
//     PROJECTION_CENTER_X;
//     this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
//   }
//   // Draw the dot on the canvas
//   draw(sin, cos) {
//     this.project(sin, cos);
//     ctx.beginPath();
//     ctx.arc(this.xProject, this.yProject, 
//       DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.fill();
//   }
// }

// function createDots() {
//   // Empty the array of dots
//   dots.length = 0;

//   // Create a new dot based on the amount needed
//   for (let i = 0; i < DOTS_AMOUNT; i++) {
//     const theta = Math.random() * 2 * Math.PI;
//     // Random value between [0,2PI]
//     const phi = Math.acos((Math.random() * 2) - 1);
//     // Random value between [-1,1]

//     // Calculate the [x,y,z] coordinates of the dot along the globe
//     const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
//     const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
//     const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
//     dots.push(new Dot(x, y, z));
//   }
// }

// // Render

// function render(a) {
//   // Clear the scene
//   ctx.clearRect(0,0,width,height);
//   // Increase the globe rotation
//   rotation = a * 0.0004;

//   const sineRotation = Math.sin(rotation); // Sine of the rotation
//   const cosineRotation = Math.cos(rotation); // Cosine of the rotation

//   //Loop through the dots array and draw every dot
//   for(let i=0; i<dots.length; i++) {
//     dots[i].draw(sineRotation, cosineRotation);
//   }
//   window.requestAnimationFrame(render);
// }

// // Function called after the user resize its screen
// function afterResize() {
//   width = canvas.offsetWidth;
//   height = canvas.offsetHeight;
//   if(window.devicePixelRatio>1) {
//     canvas.width = canvas.clientWidth * 2;
//     canvas.height = canvas. clientHeight * 2;
//     ctx.scale(2,2);
//   } else {
//     canvas.width = width;
//     canvas.height = height;
//   }
//   GLOBE_RADIUS = width * 0.7;
//   GLOBE_CENTER_Z = -GLOBE_RADIUS;
//   PROJECTION_CENTER_X = width / 2;
//   PROJECTION_CENTER_Y = height / 2;
//   FIELD_OF_VIEW = width * 0.8;

//   createDots(); // Reset all dots
// }

// // Variable used to store a timeout when user resized its screen
// let resizeTimeout;
// // Function called right after user resized its screen
// function onResize() {
//   //Clear the timeout variable
//   resizeTimeout = window.clearTimeout(resizeTimeout);
//   // Store a new timeout to avoid calling afterREsize for every resize event
//   resizeTimeout = window.setTimeout(afterResize, 500);
// }
// window.addEventListener('resize', onResize);

// // Populate the dots array with random dots
// createDots();

// // Tender the scene
// window.requestAnimationFrame(render);


// 이모지 // 

function getTexture(emoji) {
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCanvas.width = 60;
  tempCanvas.height = 60;
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';
  tempCtx.font = '54px serif';
  tempCtx.fillText(emoji, 30, 35);
  return tempCanvas;
}
// const textures = [Math.floor(Math.random())];
const textures = [getTexture('🦊'), getTexture('🦓'), getTexture('🐹'), getTexture('🐨')];;

/* ====================== */
/* ====== VARIABLES ===== */
/* ====================== */
let width = canvas.offsetWidth; // Width of the canvas
let height = canvas.offsetHeight; // Height of the canvas
const dots = []; // Every dots in an array

/* ====================== */
/* ====== CONSTANTS ===== */
/* ====================== */
/* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
let DOTS_AMOUNT = Math.min(width, height); // Amount of dots on the screen
const DOT_RADIUS = 20; // Radius of the dots
let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
let PERSPECTIVE = width * 0.8;
let GLOBE_RADIUS = Math.min(width, height) * 0.4;

class Dot {
  constructor() {
    this.theta = Math.random() * 2 * Math.PI; // Random value between [0, 2Pi]
    this.phi = Math.acos((Math.random() * 2) - 1); // Random value between [0, Pi]
    
    this.texture = textures[Math.floor(Math.random() * textures.length)];
    
    // Calculate the [x, y, z] coordinates of the dot along the globe
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    this.radius = Math.random() * (GLOBE_RADIUS * 0.2) + (GLOBE_RADIUS * 0.8);
    
    this.xProjected = 0;
    this.yProjected = 0;
    this.scaleProjected = 0;
    
    TweenMax.to(this, 40, {
      theta: this.theta + Math.PI * 2,
      repeat: -1,
      ease: Power0.easeNone
    });
  }
  // Do some math to project the 3D position into the 2D canvas
  project() {
    this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
    this.y = this.radius * Math.cos(this.phi);
    this.z = this.radius * Math.sin(this.phi) * Math.sin(this.theta) + this.radius;
    
    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
    this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
  }
  // Draw the dot on the canvas
  draw() {
    ctx.drawImage(this.texture, this.xProjected - DOT_RADIUS, this.yProjected - DOT_RADIUS, DOT_RADIUS * 2 * this.scaleProjected, DOT_RADIUS * 2 * this.scaleProjected)
  }
}

function createDots() {
  // Empty the array of dots
  dots.length = 0;
  
  // Create a new dot based on the amount needed
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    // Create a new dot and push it into the array
    dots.push(new Dot());
  }
}

/* ====================== */
/* ======== RENDER ====== */
/* ====================== */
function render() {
  // Clear the scene
  ctx.clearRect(0, 0, width, height);
  
  // Loop through the dots array and project every dot
  for (var i = 0; i < dots.length; i++) {
    dots[i].project();
  }
  
  // Sort dots array based on their projected size
  dots.sort((dot1, dot2) => {
    return dot1.scaleProjected - dot2.scaleProjected;
  });
  
  // Loop through the dots array and draw every dot
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw();
  }
  
  window.requestAnimationFrame(render);
}


// Function called after the user resized its screen
function afterResize () {
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  PERSPECTIVE = width * 0.8;
  GLOBE_RADIUS = Math.min(width, height) * 0.4;
  DOTS_AMOUNT = Math.min(width, height);
  
  createDots(); // Reset all dots
}

// Variable used to store a timeout when user resized its screen
let resizeTimeout;
// Function called right after user resized its screen
function onResize () {
  // Clear the timeout variable
  resizeTimeout = window.clearTimeout(resizeTimeout);
  // Store a new timeout to avoid calling afterResize for every resize event
  resizeTimeout = window.setTimeout(afterResize, 500);
}
window.addEventListener('resize', onResize);

// Populate the dots array with random dots
createDots();

// Render the scene
window.requestAnimationFrame(render);

