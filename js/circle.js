class Circle{
    constructor(_x, _y, _r, _s) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
        this.angle = -PI / 2;
        this.speed = _s;
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(1);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    update(parent) {
        this.angle += this.speed;
        // if parent exist, redraw the position by moving the circle
        if(parent){
            var rSum = this.r + parent.r;
            this.x = parent.x + rSum * cos(this.angle);// * Math.cos(angle);
            this.y = parent.y + rSum * sin(this.angle);// * Math.sin(angle);;
        }
    }
}
