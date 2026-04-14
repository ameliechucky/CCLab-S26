class Cloud {
    // constructor, this is like the setup
    //the setup of our variables
    constructor(x, y, sc) {
        this.x = x;
        this.y = y;
        this.sc = sc;
        this.x0 = this.x;
        this.y0 = this.y;
        this.speedX = map(this.sc, 0.5, 1, 5, 1);
        this.isOut = false;
    }
    //everything that will draw the cloud
    display() {
        push();
        translate(this.x, this.y);
        scale(this.sc);
        this.drawRightArm();
        this.drawLeftArm();
        noStroke();
        //body
        circle(0, 0, 100);
        //circles around
        for (let a = 0; a < 2 * PI; a += PI / 6) {
            push();
            rotate(a);
            circle(50, 30, 50);
            pop();
        }
        //eyes
        fill(0);
        circle(-30, 0, 5);
        circle(30, 0, 5);
        arc(0, 0, 30, 30, 0, PI);
        pop();
    }
    //updates the variables
    update() {
        this.y = lerp(this.y, this.y0 - 200 * noise(frameCount * 0.01), 0.1);
        this.x = this.x + this.speedX;
        if (this.x > width * 1.5) {
            this.isOut = true;
        }
    }

    drawRightArm() {
        //arms
        push();
        beginShape();
        let lineLength2 = 100;
        noFill();
        for (let i = 0; i <= lineLength2; i += lineLength2 / 20) {
            strokeWeight(10);
            let v = 20 * sin(frameCount * 0.1 - i / 0.1);
            vertex(i, v);
        }
        endShape();
        pop();
    }
    drawLeftArm() {
        //arms
        push();
        scale(-1, 1);
        beginShape();
        let lineLength2 = 100;
        noFill();
        for (let i = 0; i <= lineLength2; i += lineLength2 / 20) {
            strokeWeight(10);
            let v = 20 * sin(frameCount * 0.1 - i / 0.1);
            vertex(i, v);
        }
        endShape();
        pop();
    }
}
