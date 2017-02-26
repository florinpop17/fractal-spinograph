let circle;

function setup() {
    createCanvas(600, 600);

    circle = new Circle(width / 2, height / 2, 100);
}

function draw() {
    background(51);

    circle.show();
}
