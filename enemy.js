class Enemy {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    drawRect() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    movement() {
        if (setUp2) {
            this.x = canvas.width - this.w;
            this.y = canvas.height - this.h;
            setUp2 = false;
        }
        this.x -= this.xSpeed;
        if(this.x < 0){ //make it track player for knight class
            this.xSpeed *= -1;
        }
        this.y -= this.ySpeed;
        if (this.y < yWall || this.y > canvas.height - this.h) {
            this.ySpeed *= -1;
        }
    }
}