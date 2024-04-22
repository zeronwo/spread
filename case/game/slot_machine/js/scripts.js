// 獲取 HTML 元素
const spinButton = document.getElementById('spin_button');
const outer_column = document.querySelectorAll('.outer_column');
const columns = document.querySelectorAll('.column');
const reel = document.querySelectorAll('.reel');
const reelsContainer = document.getElementById('reels-container');

// 定義可用的水果
const fruits = [
  '<img src="images/item_01.png" alt="Fruit Image 01">',
  '<img src="images/item_02.png" alt="Fruit Image 02">',
  '<img src="images/item_03.png" alt="Fruit Image 03">',
  '<img src="images/item_04.png" alt="Fruit Image 04">',
  '<img src="images/item_05.png" alt="Fruit Image 05">',
  '<img src="images/item_06.png" alt="Fruit Image 06">',
  '<img src="images/item_07.png" alt="Fruit Image 07">',
  '<img src="images/item_08.png" alt="Fruit Image 08">',
  '<img src="images/item_09.png" alt="Fruit Image 09">',
  '<img src="images/item_10.png" alt="Fruit Image 10">',
  '<img src="images/item_11.png" alt="Fruit Image 11">',
  '<img src="images/item_12.png" alt="Fruit Image 12">',
  '<img src="images/item_13.png" alt="Fruit Image 13">',
];


// 生成指定數量的隨機水果
function generateRandomFruits(count) {
  return Array.from({ length: count }, () =>
    `<div class="reel">${fruits[Math.floor(Math.random() * fruits.length)]}</div>`
  ).join('');
}

// 更新 columns 內容
function updateColumns(contents) {
  columns.forEach((column, index) => {
    column.innerHTML = contents[index] || '';
  });
}

// 在網頁載入時生成隨機水果
updateColumns(Array.from(columns, () => generateRandomFruits(30)));

// 為按鈕添加點擊事件監聽器
spinButton.addEventListener('click', () => {
  reelsContainer.classList.add('active');
  // 先移除所有具有 'bingo' 類別的 .reel 元素
  const bingoReels = document.querySelectorAll('.reel.bingo');
  bingoReels.forEach(reel => {
    reel.classList.remove('bingo');
  });
  setTimeout(() => {
    // 1. 保留每個outer_column最後三個的reel
    const outerColumns = document.querySelectorAll('.outer_column');
    outerColumns.forEach(outerColumn => {
      const reels = Array.from(outerColumn.querySelectorAll('.reel'));
      const preservedReels = reels.slice(-3);
      const column = outerColumn.querySelector('.column');
      column.innerHTML = '';
      preservedReels.forEach(reel => column.appendChild(reel));
    });

    // 2. 在每個outer_column最後三個的reel下面生成指定數量的隨機水果
    const newReelsCount = 27; // 指定生成的新水果數量
    outerColumns.forEach(outerColumn => {
      const column = outerColumn.querySelector('.column');
      const newReels = generateRandomFruits(newReelsCount);
      column.insertAdjacentHTML('beforeend', newReels);
    });

    // 3. 再移除active
    reelsContainer.classList.remove('active');
  }, 3200);


  //指定中獎機率 隨機相同圖片
  // 生成 1 到 13 之間的隨機整數
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  // 構造圖片檔名
  const imageFileName = `images/item_${String(randomNumber).padStart(2, '0')}.png`;
  // 設置三個 outer_column 的第 28 個 reel 為相同的圖片
  outer_column[0].querySelector('.column').children[28].innerHTML = `<img src="${imageFileName}" alt="Fruit Image">`;
  outer_column[1].querySelector('.column').children[28].innerHTML = `<img src="${imageFileName}" alt="Fruit Image">`;
  outer_column[2].querySelector('.column').children[28].innerHTML = `<img src="${imageFileName}" alt="Fruit Image">`;

  setTimeout(() => {
    //中獎載入bingo
    const imageNumber1 = outer_column[0].querySelector('.column').children[28].querySelector('img').getAttribute('src');
    const imageNumber2 = outer_column[1].querySelector('.column').children[28].querySelector('img').getAttribute('src');
    const imageNumber3 = outer_column[2].querySelector('.column').children[28].querySelector('img').getAttribute('src');

    if (imageNumber1 === imageNumber2 && imageNumber2 === imageNumber3) {
      outer_column[0].querySelector('.column').children[28].classList.add('bingo');
      outer_column[1].querySelector('.column').children[28].classList.add('bingo');
      outer_column[2].querySelector('.column').children[28].classList.add('bingo');
    }
  }, 3199); // 5000 毫秒 = 5 秒
});