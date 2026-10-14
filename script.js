let bgImage;
let img;
let y = 0;
let vid;
let santa;

async function setup () {
  createCanvas(900, 900);
  bgImage = await loadImage('media/winter.jpg');
  img = await loadImage('media/present.png');
  vid = createVideo('media/snow.mp4');
  vid.hide(); // Hide the original HTML video element
  vid.loop();
  santa = await loadImage('media/santa.png');
  mySound = await loadSound('media/jingle-bells.mp3');
  
}

function draw () {
  image(bgImage, 0, 0, width, height);
 //background(220);
 //tint('red');
  image(img, 500, y, 100, 100);
  image(vid, 20, 20, 400, 400);
  y += 2;
  if (y > width) {
    y = 0;
  }
  
  push();
  movement = frameCount * 0.009;
  rotate(movement);
  imageMode(CENTER);
  image(santa, width/2 ,height/2, width/2, height/2);
  pop();
  
}
  function mousePressed () {
    mySound.play();
  }