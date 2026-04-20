let capture;

function setup() {
  createCanvas(400, 400);
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 擷取攝影機影像
  capture = createCapture(VIDEO);
  // 隱藏原始 HTML 影片元件，只顯示在 canvas 上
  capture.hide();
}

function draw() {
  background(220);
  background('#e7c6ff');
  
  // 計算影像寬高（全螢幕的 60%）
  let vW = width * 0.6;
  let vH = height * 0.6;
  
  // 將影像顯示在視窗中間
  image(capture, (width - vW) / 2, (height - vH) / 2, vW, vH);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布尺寸
  resizeCanvas(windowWidth, windowHeight);
}
