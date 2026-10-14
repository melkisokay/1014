let img;
async function setup () {
  createCanvas(400,400);
  img = await loadImage('media/hamster.gif');
}

function draw () {
  background(220);
  
 image(img,width/2,height/2);
 // filter(GRAY);
  x+=2;
  if(x>width){
    x=0;
  }
}
