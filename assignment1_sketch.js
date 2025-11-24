function setup() {
createCanvas(600, 400);
background(180, 210, 255); // 하늘
// 땅
fill(140, 200, 110);
rect(0, 300, 600, 100);
// 산 (왼-중-오)
fill(70, 110, 90);
triangle(0, 300, 150, 100, 300, 300);
fill(100, 150, 120);
triangle(150, 300, 300, 100, 450, 300);
fill(70, 110, 90);
triangle(300, 300, 450, 100, 600, 300);
// 해
noStroke();
fill(250, 225, 120);
ellipse(520, 80, 100, 100);
// 구름(좌)
fill(255);
ellipse(130, 100, 70, 60);
ellipse(170, 100, 80, 60);
ellipse(150, 80, 70, 60);
// 구름(우)
ellipse(400, 80, 80, 60);
ellipse(440, 80, 80, 60);
ellipse(420, 60, 70, 50);
// 집 몸체
fill(235, 170, 170);
rect(250, 220, 100, 100);
// 지붕
fill(150, 80, 80);
triangle(240, 220, 300, 160, 360, 220);
// 굴뚝
fill(90, 60, 60);
rect(330, 160, 20, 40);
// 창문
fill(200, 240, 255);
rect(265, 250, 30, 30);
rect(305, 250, 30, 30);
// 문
fill(100, 70, 50);
rect(290, 280, 30, 40);
// 굴뚝 연기
fill(255, 255, 255, 220);
ellipse(340, 130, 25, 25);
ellipse(350, 110, 30, 30);
ellipse(360, 90, 35, 35);
ellipse(370, 70, 40, 40);
// 나무
fill(100, 70, 50);
rect(460, 260, 25, 60);
fill(70, 140, 80);
ellipse(470, 250, 70, 70);
ellipse(440, 270, 70, 70);
ellipse(500, 270, 70, 70);
// 테두리
noFill(); stroke(0); strokeWeight(1);
rect(0.5, 0.5, width-1, height-1);
// PNG 저장(원하는 경우)
// saveCanvas('abstract_house_scene', 'png');
}

