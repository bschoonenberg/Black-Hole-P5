let ringColors = [
    [255, 100, 190],
    [255, 160, 120],
    [120, 190, 255],
    [180, 100, 255],
    [255, 200, 230]
];

function setup() {
    let canvas = createCanvas(700, 500);
    canvas.parent("sketch-container");
    angleMode(DEGREES);
}

function draw() {
    background(10, 5, 25)

    //stars
    noStroke();
    fill(255);

    for (let i = 0; i < 100; i++) {
        circle(random(width), random(height), random(1, 3));
    }

    //black hole center
    translate(width/2, height/2);
    rotate(25);

    //colored rings
    noFill();
    for (let i = 0; i < 12; i++) {
        let c = ringColors[i % ringColors.length];
        stroke(c[0], c[1], c[2]);
        strokeWeight(2);
        ellipse(0, 0, 230 + i * 15, 65 + i * 7)
    }

    //black hole
    stroke(45, 15, 115);
    strokeWeight(8);
    fill(0);
    circle(0, 0, 125)


}
