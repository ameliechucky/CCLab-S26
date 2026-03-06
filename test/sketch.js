let x, y;
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-canvas-container");
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(220);
    push();
    translate(x, y);
    let off = map(noise(frameCount * 0.008), 0, 1, -60, 60);
    let v = 30 * sin(frameCount * (0.1));
    let u = 60 * cos(frameCount * (0.06)) + off;
    fill(0);
    circle(0 + u, 0 + v, 50);

    push();
    translate(u, v);
    noFill();

    let lineLength = 80;
    for (let angle = 0; angle < 2 * PI; angle += PI / 4) {
        //push();
        rotate(angle);
        //beginShape();
        for (let i = 0; i <= lineLength; i += lineLength / 30) {
            let vy = 10 * sin(frameCount * 0.05 - i * 0.1);
            //vertex(i, vy);
            push();
            fill(0);
            circle(i, vy, (lineLength - i) * 0.3);
            pop();
        }
        //endShape();
        // pop();
    }

    pop();

    pop();
}
