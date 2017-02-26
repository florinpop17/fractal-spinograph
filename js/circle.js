class Circle{
    constructor(_x, _y, _r) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(1);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    update(angle, parent) {

        // if parent exist, redraw the position by moving the circle
        if(parent){
            var rSum = this.r + parent.r;
            this.x = parent.x + rSum * cos(angle);// * Math.cos(angle);
            this.y = parent.y + rSum * sin(angle);// * Math.sin(angle);;
        }
    }
}
