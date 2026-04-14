let backSound;
let sounds = [];
//create arrays for the position
let x = [];
let y = [];
//create my image
let img;
function preload() {
  backSound = loadSound("my-sounds/00.mp3");
  for (let i = 1; i <= 8; i++) {
    //sounds[i] = loadSound("my-sounds/0"+i+".mp3");
    sounds.push(loadSound("my-sounds/0" + i + ".mp3"));
    img = loadImage("images/asterisk.png");
  }

}
function setup() {
  createCanvas(400, 400);
  // backSound.loop();
}
function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
  // let index = (x.length - 1) % sounds.length;
  let index = floor(map(mouseY, 0, height, 0, sounds.length));
  console.log(index);
  sounds[index].play();
}

function draw() {
  background(220);
  for (let i = 0; i < x.length; i++) {
    drawCircle(x[i], y[i]);
  }
}
//create a function to draw the circles
function drawCircle(u, v, s) {
  fill(0);
  //circle(u, v, 50);
  imageMode(CENTER);
  filter(INVERT);
  tint(0, 0, 255, 150);
  image(img, u, v, img.width * 1.5, img.height * 1.5);
}

