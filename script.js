let img;
let x = 0;
let vid;
async function setup () {
  createCanvas(400,400);
  img = await loadImage('media/hamster.gif');
  vid = createVideo('media/rabbit.mp4');
  mySound = await loadSound('media/stardew.mp3');
}

function draw () {
  background(220);
 // tint('red');
 image(img,x,0,0);
  image(vid.loop(),width/2,height/2);
  x+=2;
  if(x>width){
    x=0;
  }
  
  function mousePressed () {
    mySound.play();
  }


  //vid.play();
}
