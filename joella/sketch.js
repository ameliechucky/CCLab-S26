let handPose;
let video;
let hands = [];
let options = { maxHands: 1, flipped: false };

let b;

let dif = 0;
let p1;
let p_p1;
let doSomething = false;

function preload() {
  handPose = ml5.handPose(options);
}
// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}
function setup() {
  createCanvas(640, 480);
  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);

  osc = new p5.TriOsc();
  envelope = new p5.Env();
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);
  envelope.setRange(1, 0);
  b = new Ball(random(width), random(height));
}

function draw() {
  background(255, 50);
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    // Draw all the tracked hand points
    p1 = hand.keypoints[20];
    if (p_p1 != undefined) {
      //this difference will only work for swiping on one direction with right hand
      dif = p1.x - p_p1.x;
      //just for reference
      strokeWeight(10);
      line(p1.x, p1.y, p_p1.x, p_p1.y);
    }
    // if the hand is moved fast
    if (dif > 100) {
      b.move = true;
    }
  }
  pop();
  if (b.move == true) {
    b.update();
  }
  b.display();

  console.log(b.move);


  p_p1 = p1;
}

