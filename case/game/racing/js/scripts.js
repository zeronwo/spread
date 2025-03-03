// 常數定義
const ROWS = 30;          // 行數
const COLS = 5;           // 列數
const GAME_SPEED = 500;   // 遊戲速度（毫秒）
const SCROLL_OFFSET = 600; // 滾動偏移量
const OBSTACLE_CHANCE = 0.2; // 障礙物生成機率

let planePosition = { x: 2, y: ROWS - 1 }; // 飛機初始位置
let score = 0;         // 分數
let gameOver = false;  // 遊戲結束狀態
let direction = 0;     // 滑行方向：-1（左），0（無），1（右）
let lastFrameTime = 0; // 上一次更新時間

// 獎品與障礙物
const prizes = [
  { x: 1, y: 25, points: 10 },
  { x: 3, y: 20, points: 50 },
  { x: 2, y: 15, points: 10 },
  { x: 4, y: 10, points: 50 }
];
let obstacles = [];

// 緩存 jQuery 選擇器
const $game = $("#game");
const $score = $("#score");

// 網格狀態
let gridCells = [];

// 初始化網格
function initGrid() {
  let gridHTML = '';
  for (let r = 0; r < ROWS; r++) {
    gridCells[r] = [];
    for (let c = 0; c < COLS; c++) {
      gridHTML += `<div class="cell"></div>`;
      gridCells[r][c] = null;
    }
  }
  $game.html(gridHTML);
  $game.children().each((i, el) => {
    const r = Math.floor(i / COLS);
    const c = i % COLS;
    gridCells[r][c] = $(el);
  });
  updateGrid();
}

// 更新網格（只更新變動部分）
function updateGrid() {
  if (gameOver) return;

  // 重置所有格子（僅限飛機、獎品、障礙物相關）
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      gridCells[r][c].removeClass('plane prize obstacle').removeAttr('data-points');
    }
  }

  // 更新獎品
  prizes.forEach(p => gridCells[p.y][p.x].addClass('prize').attr('data-points', p.points));
  // 更新障礙物
  obstacles.forEach(o => gridCells[o.y][o.x].addClass('obstacle'));
  // 更新飛機
  gridCells[planePosition.y][planePosition.x].addClass('plane');
}

// 生成並移動障礙物
function generateObstacles() {
  if (Math.random() < OBSTACLE_CHANCE) {
    const x = Math.floor(Math.random() * COLS);
    obstacles.push({ x: x, y: 0 });
    // 立即檢查新生成的障礙物是否與飛機重疊
    if (x === planePosition.x && 0 === planePosition.y) {
      endGame("撞到新生成障礙物，遊戲結束！");
    }
  }
  // 移動現有障礙物並檢查碰撞
  obstacles = obstacles.map(obs => {
    const newObs = { ...obs, y: obs.y + 1 };
    if (newObs.x === planePosition.x && newObs.y === planePosition.y) {
      endGame("撞到移動障礙物，遊戲結束！");
    }
    return newObs;
  }).filter(obs => obs.y < ROWS);
}

// 左移（防抖動處理）
const moveLeft = debounce(() => {
  if (gameOver) return;
  direction = -1;
}, 100);

// 右移（防抖動處理）
const moveRight = debounce(() => {
  if (gameOver) return;
  direction = 1;
}, 100);

// 防抖動函數
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 更新飛機位置
function updatePlanePosition() {
  if (direction === -1 && planePosition.x > 0) {
    planePosition.x--;
  } else if (direction === 1 && planePosition.x < COLS - 1) {
    planePosition.x++;
  }
  checkForCollision();
}

// 上移邏輯
function moveUp(timestamp) {
  if (gameOver) return;

  if (!lastFrameTime) lastFrameTime = timestamp;
  const deltaTime = timestamp - lastFrameTime;

  if (deltaTime >= GAME_SPEED) {
    if (planePosition.y > 0) {
      planePosition.y--;
      updatePlanePosition();
      generateObstacles(); // 先更新障礙物並檢查碰撞
      checkForCollision(); // 再檢查獎品和現有障礙物
      updateGrid();
      scrollToPlane();
    } else {
      endGame();
    }
    lastFrameTime = timestamp;
  }
  requestAnimationFrame(moveUp);
}

// 檢查碰撞（僅針對獎品和現有障礙物）
function checkForCollision() {
  const { x, y } = planePosition;
  const prizeIndex = prizes.findIndex(p => p.x === x && p.y === y);
  if (prizeIndex !== -1) {
    score += prizes[prizeIndex].points;
    prizes.splice(prizeIndex, 1);
    updateScore();
  }
  // 檢查現有障礙物（generateObstacles 已處理移動和新生成的情況）
  if (obstacles.some(o => o.x === x && o.y === y)) {
    endGame("撞到障礙物，遊戲結束！");
  }
}

// 更新分數
function updateScore() {
  $score.text(`分數: ${score}`);
}

// 滾動到飛機位置
function scrollToPlane() {
  const $plane = $(".plane");
  if ($plane.length) {
    const offset = $plane.offset().top - SCROLL_OFFSET;
    $("html, body").scrollTop(offset);
  }
}

// 結束遊戲
function endGame(message = `遊戲結束！最終分數：${score}`) {
  gameOver = true;
  alert(message);
}

// 開始遊戲
function startGame() {
  initGrid();
  requestAnimationFrame(moveUp);
}

$(document).ready(function () {
  startGame();
  $("#btnLeft").on("click", moveLeft);
  $("#btnRight").on("click", moveRight);
});