let pix = [];
let img = [];
function preload() {
  //load images
  for (let i = 1; i < 5; i++) {
    let fileName = 'assets/' + i + '.png';
    img.push(loadImage(fileName));
  }
}
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("p5-canvas-container");
  //create objects with the images
  for (let i = 0; i < img.length; i++) {
    pix[i] = new Pix(img[i], i + 0.5);
  }
}
function draw() {
  background(0);
  //update and display the objects
  for (let i = 0; i < img.length; i++) {
    pix[i].update(pix[3]);
    pix[i].display();
  }

}
class Pix {
  constructor(pix, i) {
    this.pix = pix; //add image
    this.x = -this.pix.width / 2; //position
    this.y = 0;
    this.speedX = i; //speed for each image
  }
  display() {
    image(this.pix, this.x, this.y);
  }
  update(other) {
    //when mouse is on the right, move left
    if (mouseX > width / 2 * 1.5 && (width - other.x) < other.pix.width) {
      this.x = this.x - this.speedX;
    }
    //when mouse is on the left, move right
    if (mouseX < width / 2 * 0.5 && other.x < other.pix.width / 2 - this.pix.width / 2) {
      this.x = this.x + this.speedX;
    }

  }
}

