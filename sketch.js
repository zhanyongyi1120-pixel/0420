let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  // 擷取攝影機影像
  capture = createCapture(VIDEO);
  // 隱藏原始 HTML 影片元件，只顯示在 canvas 上
  capture.hide();
}

function draw() {
  background('#e7c6ff');
  
  // 計算影像寬高（全螢幕的 60%）
  let vW = width * 0.6;
  let vH = height * 0.6;

  // 計算居中對齊的起始位置
  let x = (width - vW) / 2;
  let y = (height - vH) / 2;
  
  // 修正左右顛倒：進行鏡像處理
  push();
  // 將座標系移動到影像區域的右側邊界，然後水平縮放 -1 倍
  translate(x + vW, y);
  scale(-1, 1);

  // 在反轉後的座標系中繪製影像，此時起始點設為 (0,0)
  image(capture, 0, 0, vW, vH);
  pop();
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布尺寸
  resizeCanvas(windowWidth, windowHeight);
}
