let startTime;
let recording = false;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  startTime = millis();
}

function draw() {
  let t = (millis() - startTime) / 1000.0;
  let dayToNight = (sin(t * 0.2) + 1) / 2;

  // 하늘색깔
  let morning = color(180, 210, 255);  
  let night   = color(20, 20, 60);     
  let skyCol  = lerpColor(morning, night, dayToNight);
  background(skyCol);

  fill(140, 200, 110);
  rect(0, 300, 600, 100);

  fill(70, 110, 90);
  triangle(0, 300, 150, 100, 300, 300);
  fill(100, 150, 120);
  triangle(150, 300, 300, 100, 450, 300);
  fill(70, 110, 90);
  triangle(300, 300, 450, 100, 600, 300);

  // 해
  noStroke();
  let sunX = 520 + 40 * cos(t * 0.3);      
  let sunY = 80 + 20 * sin(t * 0.3);       
  let sunSize = 100 + 15 * sin(t * 2.0);  
  fill(250, 225, 120);
  ellipse(sunX, sunY, sunSize, sunSize);

  // 구름
  fill(255);
  let cloudOffsetL = 25 * sin(t * 0.7);
  ellipse(130 + cloudOffsetL, 100, 70, 60);
  ellipse(170 + cloudOffsetL, 100, 80, 60);
  ellipse(150 + cloudOffsetL, 80, 70, 60);

  let cloudOffsetR = 30 * sin(t * 0.7 + PI / 2);
  ellipse(400 + cloudOffsetR, 80, 80, 60);
  ellipse(440 + cloudOffsetR, 80, 80, 60);
  ellipse(420 + cloudOffsetR, 60, 70, 50);

  // 집
  fill(235, 170, 170);
  rect(250, 220, 100, 100);
  
  fill(150, 80, 80);
  triangle(240, 220, 300, 160, 360, 220);

  fill(90, 60, 60);
  rect(330, 160, 20, 40);

  let windowBright = map(dayToNight, 0, 1, 240, 150);
  fill(200, windowBright, 255);
  rect(265, 250, 30, 30);
  rect(305, 250, 30, 30);

  fill(100, 70, 50);
  rect(290, 280, 30, 40);

  // 연기
  let smokeOffset = (frameCount * 0.5) % 90; 
  let smokeAlpha = map(smokeOffset, 0, 90, 220, 0);
  fill(255, 255, 255, smokeAlpha);
  ellipse(340, 130 - smokeOffset, 25, 25);
  ellipse(350, 110 - smokeOffset, 30, 30);
  ellipse(360, 90 - smokeOffset, 35, 35);
  ellipse(370, 70 - smokeOffset, 40, 40);

  // 나무
  let sway = 5 * sin(t * 1.5);
  let treeScale = 1 + 0.05 * sin(t * 1.5 + PI / 3);
  push();
  translate(470 + sway, 260);
  scale(treeScale);

  fill(100, 70, 50);
  rect(-10, 0, 25, 60);

  fill(70, 140, 80);
  ellipse(0, -10, 70, 70);
  ellipse(-30, 10, 70, 70);
  ellipse(30, 10, 70, 70);
  pop();

  // 별
  if (dayToNight > 0.6) {
    stroke(255, 255, 255, 180);
    strokeWeight(2);
    for (let i = 0; i < 20; i++) {
      point(random(width), random(150)); 
    }
    noStroke();
  }

  // 테두리
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(0.5, 0.5, width - 1, height - 1);
  
  if (frameCount === 1 && !recording) {
    recording = true;
    saveGif('Sketch', 10); 
  }
}



