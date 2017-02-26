var circles = [];
var path = [];
var nrCircles = 4;

var speed = 0.005;
var speedAmp = 4;

var circlesP;
var circlesSlider;

var speedP;
var speedSlider;

var speedAmpP;
var speedAmpSlider;

function setup() {
    createCanvas(600, 600);

    createCircles();

    circlesP = createP('Number of circles that orbit: '+nrCircles);
    circlesSlider = createSlider(3, 8, nrCircles, 1);
    circlesSlider.changed(function() {
        nrCircles = circlesSlider.value();
        circlesP.html('Number of circles that orbit: '+nrCircles);
        reset();
    });

    speedP = createP('Speed: '+speed);
    speedSlider = createSlider(0.001, 0.05, speed, 0.002);
    speedSlider.changed(function() {
        speed = speedSlider.value();
        speedP.html('Speed: '+speed);
        reset();
    });

    speedAmpP = createP('Speed amplitude: '+speedAmp);
    speedAmpSlider = createSlider(2, 20, speedAmp, 1);
    speedAmpSlider.changed(function() {
        speedAmp = speedAmpSlider.value();
        speedAmpP.html('Speed amplitude: '+speedAmp);
        reset();
    });
}

function draw() {
    background(51);

    circles.forEach((circle, idx) => {
        circle.update(circles[idx - 1]);
        circle.show();

        // if it's last, add it's position to the path array
        if(idx === nrCircles - 1){
            path.push({
                x: circle.x,
                y: circle.y
            })
        }

    });

    drawPath();
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

            var newSpeed = prevCircle.speed * speedAmp;

            // create it on same X
            circles.push(new Circle(newX, newY, newR, newSpeed));

            // else create the 1st circle
        } else {
            circles.push(new Circle(width / 2, height / 2, 100, speed));
        }
    }
}

function drawPath() {
    beginShape();

    strokeWeight(2);
    stroke(255, 0, 255);

    path.forEach(dot => {
        vertex(dot.x, dot.y);
    });

    endShape();
}

function reset() {
    circles = [];
    path = [];
    createCircles();
}
