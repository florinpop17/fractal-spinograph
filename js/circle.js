class Circle{
    constructor(_x, _y, _r) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
    }

    show() {
        noFill();
        stroke(255);
        strokeWeight(2);

        ellipse(this.x, this.y, this.r * 2);        
    }
}
