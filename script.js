let bgImage;
let img;
let y = 0;
let vid;
let santa;
let present2;

async function setup () {
  createCanvas(900, 900);
  bgImage = await loadImage('media/winter.jpg');
  img = await loadImage('media/present.png');
  present2 = await loadImage('media/presents.png');
  vid = createVideo('media/rudolph.mp4');
  vid.hide(); // for some reason without this theres 2 videos
  vid.loop();
  santa = await loadImage('media/santa.png');
  mySound = await loadSound('media/jingle-bells.mp3');
  
  colorMode(HSB, 360, 100, 100); // used for color shifting for smoothness

}

function draw () {
  image(bgImage, 0, 0, width, height);
  image(img, 500, y, 110, 110);
  image(vid, 20, 20, 400, 400);
  
  y += 2;
  if (y > width) {
    y = 0;
  }

  push();
  movement = frameCount * 0.009;
  rotate(movement);
  imageMode(CENTER);
  image(santa, width / 2, height / 2, width / 2, height / 2);
  pop();
  
  let h = (frameCount * 2) % 360; 
  tint(h, 80, 100);
  image(present2, 600, y * 0.80, 110, 110);
  noTint();
}


function mousePressed () {
  mySound.play();
}