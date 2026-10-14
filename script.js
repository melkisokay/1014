let bgImage;
let img;
let y = 0;
let vid;

async function preload() {
  // 1. Load the image before the program starts
  bgImage = loadImage('media/winter.jpg'); 
}
async function setup () {
  createCanvas(900, 900);
  img = await loadImage('media/hamster.gif');
  vid = createVideo('media/snow.mp4');
  vid.hide(); // Hide the original HTML video element
  vid.loop();
  mySound = await loadSound('media/jingle-bells.mp3');
  
}

function draw () {
image(bgImage, 0, 0, width, height); 
 background(220);
  // tint('red');
  image(img, 0, y);
  image(vid, width / 2, height / 2, 200, 200);
  y += 2;
  if (y > width) {
    y = 0;
  }
  push();
  movement = frameCount * 0.02;
  rotate(movement);
  fill('red');
  ellipse(300, 200, 50);
  pop();
}
  function mousePressed () {
    mySound.play();
  }