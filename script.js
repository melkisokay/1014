let img;
let x = 0;
let vid;
async function setup () {
  createCanvas(400,400);
  img = await loadImage('media/hamster.gif');
  vid = createVideo('media/rabbit.mp4');
vid.hide(); // Hide the original HTML video element
vid.loop();
  mySound = await loadSound('media/stardew.mp3');
}

function draw () {
  rotate = frameCount * 2;
  background(220);
 // tint('red');
 image(img,x,0,0);
  image(vid, width/2, height/2, 150, 100);  y+=2;
  if(y>width){
    y=0;
  }
  
  rotate(rotate);
  ellipse(300,200,50);
  
  function mousePressed () {
    mySound.play();
  }

}
