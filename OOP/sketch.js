let c = [];
function setup() {
  createCanvas(400, 400);
}
function mousePressed() {
  c.push(new Cloud(mouseX, mouseY, random(0.5, 1)));
}
function draw() {
  background(220);
  for (let i = 0; i < c.length; i++) {
    c[i].update();
    c[i].display();
    if (c[i].isOut) {
      c.splice(i, 1);
    }

  }
  console.log(c.length);
}
