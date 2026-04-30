class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.move = false;
        this.speedX = 5;
    }
    display() {
        fill(0);
        circle(this.x, this.y, 30);
    }
    update() {
        this.speedX = this.speedX * 0.9; // 10% less per frame
        this.x -= this.speedX;
        if (this.speedX < 0.01) {
            this.move = false;
            this.speedX = 5;
        }
    }
}
