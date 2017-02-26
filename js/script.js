var circles = [];
var nrCircles = 4;

var speed = 0.01;

function setup() {
    createCanvas(600, 600);

    createCircles();
}

function draw() {
    background(51);

    circles.forEach((circle, idx) => {
        circle.update(circles[idx - 1]);
        circle.show();
    });
}

function createCircles() {
    for(var i=0; i<nrCircles; i++){

        // if there is already a circle
        if(circles.length > 0){

            // draw it to a new position depending on it's previous circle
            var prevCircle = circles[i-1];
            var newR = prevCircle.r / 3;

            // draw it above the prev circle
            var newX = prevCircle.x - prevCircle.r - newR;
            var newY = prevCircle.y - prevCircle.r - newR;

            var newSpeed = prevCircle.speed * 2;

            // create it on same X
            circles.push(new Circle(newX, newY, newR, newSpeed));

            // else create the 1st circle
        } else {
            circles.push(new Circle(width / 2, height / 2, 100, speed));
        }
    }
}
