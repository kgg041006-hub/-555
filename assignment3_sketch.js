const CANVAS_W = 600;
const CANVAS_H = 400;

const FACE_W = 180;
const FACE_H = 180;

const SKIN_COLOR = [255, 224, 189];
const HAIR_COLOR = [30, 20, 15];
const EYE_WHITE = [255, 255, 255];
const EYE_PUPIL = [0, 0, 0];
const LIP_COLOR = [255, 120, 150];
const PEARL_COLOR = [255, 255, 255];

let clothesColor = 30;
let bgCol;
let posX, posY;
let baseX, baseY;

let smileOn = false;
let blink = false;
let lastBlink = 0;
let surprised = false;

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  frameRate(60);

  baseX = CANVAS_W / 2;
  baseY = CANVAS_H / 2 + 10;

  posX = baseX;
  posY = baseY;

  bgCol = color(240, 248, 255); // Alice Blue
}

function draw() {
  background(bgCol);

  // 캐릭터 이동 제한
  posX = constrain(posX, 120, CANVAS_W - 120);
  posY = constrain(posY, 120, CANVAS_H - 40);

  // 깜박임
  const t = frameCount;
  if (t - lastBlink > 120 && (t % 240) < 6) {
    blink = true;
    lastBlink = t;
  } else {
    blink = false;
  }

  drawCharacter(posX, posY);
}

function drawCharacter(CENTER_X, CENTER_Y) {
  const skin = color(...SKIN_COLOR);
  const hair = color(...HAIR_COLOR);
  const eyeWhite = color(...EYE_WHITE);
  const eyePupil = color(...EYE_PUPIL);
  const lips = color(...LIP_COLOR);
  const pearl = color(...PEARL_COLOR);
  const clothes = color(clothesColor);

  noStroke();

  // 목
  const NECK_Y = CENTER_Y + FACE_H / 2 - 40;
  fill(skin);
  rect(CENTER_X - 30, NECK_Y, 60, 40);

  // 어깨/몸
  const NECK_X_OFFSET = 50;
  const TORSO_Y_START = CENTER_Y + FACE_H / 2;
  fill(clothes);

  beginShape();
  vertex(CENTER_X - NECK_X_OFFSET - 5, NECK_Y + 5);
  vertex(CENTER_X + NECK_X_OFFSET + 5, NECK_Y + 5);
  bezierVertex(
    CENTER_X + NECK_X_OFFSET + 20,
    NECK_Y + 15,
    CENTER_X + 150,
    TORSO_Y_START + 5,
    CENTER_X + 150,
    TORSO_Y_START + 100
  );
  vertex(CENTER_X + 150, TORSO_Y_START + 150);
  vertex(CENTER_X - 150, TORSO_Y_START + 150);
  bezierVertex(
    CENTER_X - 150,
    TORSO_Y_START + 5,
    CENTER_X - NECK_X_OFFSET - 20,
    NECK_Y + 15,
    CENTER_X - NECK_X_OFFSET - 5,
    NECK_Y + 5
  );
  endShape(CLOSE);

  // 옷 라인
  fill(255);
  triangle(
    CENTER_X - NECK_X_OFFSET,
    NECK_Y + 15,
    CENTER_X + NECK_X_OFFSET,
    NECK_Y + 15,
    CENTER_X,
    NECK_Y + 35
  );
  fill(clothes);
  triangle(
    CENTER_X - NECK_X_OFFSET + 5,
    NECK_Y + 10,
    CENTER_X + NECK_X_OFFSET - 5,
    NECK_Y + 10,
    CENTER_X,
    NECK_Y + 30
  );

  // 뒷머리
  fill(hair);
  ellipse(CENTER_X, CENTER_Y - 60, FACE_W + 60, FACE_H + 30);

  // 얼굴
  fill(skin);
  ellipse(CENTER_X, CENTER_Y, FACE_W, FACE_H);

  // 옆머리(왼쪽)
  const HAIR_SIDE_Y = CENTER_Y - 40;
  const HAIR_BOTTOM_Y = CANVAS_H;

  fill(hair);
  beginShape();
  vertex(CENTER_X - FACE_W/2 - 20, CENTER_Y - 45);
  bezierVertex(CENTER_X - FACE_W/2 - 5, HAIR_SIDE_Y + 20, CENTER_X - FACE_W/2 - 25, NECK_Y + 5, CENTER_X - FACE_W/2 - 20, NECK_Y + 5);
  vertex(CENTER_X - FACE_W/2 - 20, HAIR_BOTTOM_Y);
  vertex(CENTER_X - FACE_W/2 + 20, HAIR_BOTTOM_Y);
  vertex(CENTER_X - FACE_W/2 + 20, NECK_Y + 5);
  endShape(CLOSE);

  // 옆머리(오른쪽)
  fill(hair);
  beginShape();
  vertex(CENTER_X + FACE_W/2 + 20, CENTER_Y - 45);
  bezierVertex(CENTER_X + FACE_W/2 + 5, HAIR_SIDE_Y + 20, CENTER_X + FACE_W/2 + 25, NECK_Y + 5, CENTER_X + FACE_W/2 + 20, NECK_Y + 5);
  vertex(CENTER_X + FACE_W/2 + 20, HAIR_BOTTOM_Y);
  vertex(CENTER_X + FACE_W/2 - 20, HAIR_BOTTOM_Y);
  vertex(CENTER_X + FACE_W/2 - 20, NECK_Y + 5);
  endShape(CLOSE);

  // 눈썹
  stroke(hair);
  strokeWeight(1.5);
  const BROW_Y = CENTER_Y - 45;
  const BROW_GAP = 10;

  bezier(CENTER_X - 50, BROW_Y, CENTER_X - 35, BROW_Y - 5, CENTER_X - 20, BROW_Y - 2, CENTER_X - BROW_GAP, BROW_Y);
  bezier(CENTER_X + BROW_GAP, BROW_Y, CENTER_X + 20, BROW_Y - 2, CENTER_X + 35, BROW_Y - 5, CENTER_X + 50, BROW_Y);

  noStroke();

  // 눈
  const eyeLx = CENTER_X - 35;
  const eyeRx = CENTER_X + 35;
  const eyeY = CENTER_Y - 10;

  fill(eyeWhite);
  ellipse(eyeLx, eyeY, 40, 28);
  ellipse(eyeRx, eyeY, 40, 28);

  if (blink) {
    stroke(0);
    strokeWeight(3);
    line(eyeLx - 20, eyeY, eyeLx + 20, eyeY);
    line(eyeRx - 20, eyeY, eyeRx + 20, eyeY);
    noStroke();
  } else {
    const lookAmt = 5;
    const tx = constrain(map(mouseX, 0, width, -lookAmt, lookAmt), -lookAmt, lookAmt);
    const ty = constrain(map(mouseY, 0, height, -lookAmt, lookAmt), -lookAmt, lookAmt);

    fill(eyePupil);
    ellipse(eyeLx + tx, eyeY + ty, 18, 18);
    ellipse(eyeRx + tx, eyeY + ty, 18, 18);

    fill(255, 255, 255, 220);
    ellipse(eyeLx + tx + 5, eyeY + ty - 5, 4, 4);
    ellipse(eyeRx + tx + 5, eyeY + ty - 5, 4, 4);

    stroke(0);
    strokeWeight(1.5);
    arc(eyeLx, eyeY - 10, 45, 12, PI + QUARTER_PI * 0.5, TWO_PI - QUARTER_PI * 0.5);
    arc(eyeRx, eyeY - 10, 45, 12, PI + QUARTER_PI * 0.5, TWO_PI - QUARTER_PI * 0.5);
    noStroke();
  }

  // 코
  stroke(150);
  strokeWeight(2);
  line(CENTER_X, CENTER_Y + 10, CENTER_X, CENTER_Y + 30);
  noStroke();

  // 입
  fill(입술);
  if (놀람) {
    ellipse(CENTER_X, CENTER_Y + 55, 30, 40);
  } else if (smileOn) {
    arc(CENTER_X, CENTER_Y + 60, 70, 36, 0, PI);
  } else {
    arc(CENTER_X, CENTER_Y + 60, 60, 30, 0, PI);
  }

  // 귀 + 귀걸이
  const EAR_Y = CENTER_Y;
  const PEARL_SIZE = 10;

  fill(skin);
  ellipse(CENTER_X - FACE_W / 2, EAR_Y + 5, 15, 35);
  fill(pearl);
  stroke(180);
  ellipse(CENTER_X - FACE_W / 2 - 5, EAR_Y + 25, PEARL_SIZE, PEARL_SIZE);

  noStroke();
  fill(skin);
  ellipse(CENTER_X + FACE_W / 2, EAR_Y + 5, 15, 35);
  fill(pearl);
  stroke(180);
  ellipse(CENTER_X + FACE_W / 2 + 5, EAR_Y + 25, PEARL_SIZE, PEARL_SIZE);
  noStroke();
}

function keyPressed() {
  const step = 10;

  if (keyCode === LEFT_ARROW) posX -= step;
  if (keyCode === RIGHT_ARROW) posX += step;
  if (keyCode === UP_ARROW) posY -= step;
  if (keyCode === DOWN_ARROW) posY += step;

  if (key === 'b' || key === 'B') {
    bgCol = color(random(220, 255), random(235, 255), random(245, 255));
  }

  if (key === 'r' || key === 'R') {
    posX = baseX;
    posY = baseY;
    bgCol = color(240, 248, 255);
    clothesColor = 30;
    smileOn = false;
    surprised = false;
  }

  if (key === 'g' || key === 'G') {
    saveGif('myCharacter', 10);
  }

  if (keyCode === 32) {
    surprised = true;
  }
}

function keyReleased() {
  if (keyCode === 32) {
    surprised = false;
  }
}

function mousePressed() {
  smileOn = !smileOn;
  clothesColor = smileOn ? 40 : 30;
}
