const CANVAS_W = 600;
const CANVAS_H = 400;
// 얼굴 중앙 좌표 및 크기
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2 + 10;
const FACE_W = 180; // 얼굴 폭
const FACE_H = 180; // 얼굴 높이
function setup() {
createCanvas(CANVAS_W, CANVAS_H);
noLoop();
}
function draw() {
background(240, 248, 255); // Background color (Alice Blue)
// Color Definitions
const SKIN_COLOR = color(255, 224, 189);
const HAIR_COLOR = color(30, 20, 15);
const EYE_WHITE = color(255);
const EYE_PUPIL = color(0);
const LIP_COLOR = color(255, 120, 150);
const PEARL_COLOR = color(255, 255, 255);
const CLOTHES_COLOR = color(30); // Black T-shirt
// --- 0. CLOTHES & SHOULDERS
noStroke();
// 목쪽
const NECK_X_OFFSET = 50;
const NECK_Y = CENTER_Y + FACE_H / 2 - 40;
fill(SKIN_COLOR);
rect(CENTER_X - 30, NECK_Y, 60, 40);
// 2. Torso and Shoulders (부드러운 어깨선)
const TORSO_Y_START = CENTER_Y + FACE_H / 2;
fill(CLOTHES_COLOR);
// Shirt (Main body)
beginShape();
// Neck base
vertex(CENTER_X - NECK_X_OFFSET - 5, NECK_Y + 5);
vertex(CENTER_X + NECK_X_OFFSET + 5, NECK_Y + 5);
// Right Shoulder Curve
bezierVertex(CENTER_X + NECK_X_OFFSET + 20, NECK_Y + 15,
CENTER_X + 150, TORSO_Y_START + 5,
CENTER_X + 150, TORSO_Y_START + 100);
// Bottom edge
vertex(CENTER_X + 150, TORSO_Y_START + 150);
vertex(CENTER_X - 150, TORSO_Y_START + 150);
// Left Shoulder Curve
bezierVertex(CENTER_X - 150, TORSO_Y_START + 5,
CENTER_X - NECK_X_OFFSET - 20, NECK_Y + 15,
CENTER_X - NECK_X_OFFSET - 5, NECK_Y + 5);
endShape(CLOSE);
// 3. Neckline
fill(255); // White collar for contrast
triangle(
CENTER_X - NECK_X_OFFSET, NECK_Y + 15,
CENTER_X + NECK_X_OFFSET, NECK_Y + 15,
CENTER_X, NECK_Y + 35
);
fill(CLOTHES_COLOR); // Black V-neck part
triangle(
CENTER_X - NECK_X_OFFSET + 5, NECK_Y + 10,
CENTER_X + NECK_X_OFFSET - 5, NECK_Y + 10,
CENTER_X, NECK_Y + 30
);
fill(HAIR_COLOR);
ellipse(CENTER_X, CENTER_Y - 60, FACE_W + 60, FACE_H + 30);
fill(SKIN_COLOR);
ellipse(CENTER_X, CENTER_Y, FACE_W, FACE_H);
const HAIR_SIDE_Y = CENTER_Y - 40;
const HAIR_BOTTOM_Y = CANVAS_H;
fill(HAIR_COLOR);
beginShape();
vertex(CENTER_X - FACE_W/2 - 20, CENTER_Y - 45);
bezierVertex(CENTER_X - FACE_W/2 - 5, HAIR_SIDE_Y + 20,
CENTER_X - FACE_W/2 - 25, NECK_Y + 5,
CENTER_X - FACE_W/2 - 20, NECK_Y + 5);
vertex(CENTER_X - FACE_W/2 - 20, HAIR_BOTTOM_Y);
vertex(CENTER_X - FACE_W/2 + 20, HAIR_BOTTOM_Y);
vertex(CENTER_X - FACE_W/2 + 20, NECK_Y + 5);
endShape(CLOSE);
fill(HAIR_COLOR);
beginShape();
vertex(CENTER_X + FACE_W/2 + 20, CENTER_Y - 45);
bezierVertex(CENTER_X + FACE_W/2 + 5, HAIR_SIDE_Y + 20,
CENTER_X + FACE_W/2 + 25, NECK_Y + 5,
CENTER_X + FACE_W/2 + 20, NECK_Y + 5);
vertex(CENTER_X + FACE_W/2 + 20, HAIR_BOTTOM_Y);
vertex(CENTER_X + FACE_W/2 - 20, HAIR_BOTTOM_Y);
vertex(CENTER_X + FACE_W/2 - 20, NECK_Y + 5);
endShape(CLOSE);
stroke(HAIR_COLOR);
strokeWeight(1.5);
const BROW_Y = CENTER_Y - 45;
const BROW_GAP = 10;
// Left Eyebrow (Outer to Inner)
bezier(CENTER_X - 50, BROW_Y,
CENTER_X - 35, BROW_Y - 5,
CENTER_X - 20, BROW_Y - 2,
CENTER_X - BROW_GAP, BROW_Y);
// Right Eyebrow (Inner to Outer)
bezier(CENTER_X + BROW_GAP, BROW_Y,
CENTER_X + 20, BROW_Y - 2,
CENTER_X + 35, BROW_Y - 5,
CENTER_X + 50, BROW_Y);
noStroke();
//눈
fill(EYE_WHITE);
ellipse(CENTER_X - 35, CENTER_Y - 10, 40, 28);
ellipse(CENTER_X + 35, CENTER_Y - 10, 40, 28);
//쌍커플
stroke(0);
strokeWeight(1.5);
arc(CENTER_X - 35, CENTER_Y - 20, 45, 12, PI + QUARTER_PI * 0.5, TWO_PI - QUARTER_PI * 0.5);
arc(CENTER_X + 35, CENTER_Y - 20, 45, 12, PI + QUARTER_PI * 0.5, TWO_PI - QUARTER_PI * 0.5);
noStroke();
//눈알
fill(EYE_PUPIL);
ellipse(CENTER_X - 35, CENTER_Y - 10, 18, 18);
ellipse(CENTER_X + 35, CENTER_Y - 10, 18, 18);
fill(255, 255, 255, 220);
ellipse(CENTER_X - 30, CENTER_Y - 15, 5, 5);
ellipse(CENTER_X - 40, CENTER_Y - 10, 3, 3);
ellipse(CENTER_X + 40, CENTER_Y - 15, 5, 5);
ellipse(CENTER_X + 30, CENTER_Y - 10, 3, 3);
//코
stroke(150);
strokeWeight(2);
line(CENTER_X, CENTER_Y + 10, CENTER_X, CENTER_Y + 30);
noStroke();
// 입
fill(LIP_COLOR);
arc(CENTER_X, CENTER_Y + 60, 60, 30, 0, PI);
const EAR_Y = CENTER_Y;
const PEARL_SIZE = 10;
fill(SKIN_COLOR);
noStroke(); // 기존 stroke 제거
ellipse(CENTER_X - FACE_W / 2, EAR_Y + 5, 15, 35);
fill(PEARL_COLOR);
stroke(180);
ellipse(CENTER_X - FACE_W / 2 - 5, EAR_Y + 25, PEARL_SIZE, PEARL_SIZE);
noStroke();
// Right Ear
fill(SKIN_COLOR);
noStroke();
ellipse(CENTER_X + FACE_W / 2, EAR_Y + 5, 15, 35);
// Right Pearl Earring
fill(PEARL_COLOR);
stroke(180);
ellipse(CENTER_X + FACE_W / 2 + 5, EAR_Y + 25, PEARL_SIZE, PEARL_SIZE);
noStroke();
} 
