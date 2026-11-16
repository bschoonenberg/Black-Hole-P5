let thunder;
let amplitude;

//load thunderstorm audio
function preload() {
    thunder = loadSound("thunderstorm.mp3");
}

function setup() {
    createCanvas(700,500);

    //volume detection
    amplitude = new p5.Amplitude();
    amplitude.setInput(thunder);
}

function draw() {
    //gets current volume
    let volume = amplitude.getLevel();

    //sky that brightens with sound
    let brightness = volume * 500;
    background(15 + brightness, 10 + brightness, 35 + brightness);

    //rain
    stroke(130, 140, 190);

    for(let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        line (x, y, x-3, y+15);
    }

    //circle that grows with sound
    noFill();
    stroke(180, 150, 255);
    strokeWeight(2);

    let size = 100 + volume * 1000;
    circle(width/2, height/2, size);

}

//mouse press to pause/play audio
 function mousePressed() {
    userStartAudio();

    if (thunder.isPlaying()) {
         thunder.pause();
    } else {
        thunder.play();
     }
 }

 //checks if sound is above certain volume
function loudSound() {
    return amplitude.getLevel() > 0.1;
 }



