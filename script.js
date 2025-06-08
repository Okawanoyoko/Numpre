'use strict';

//同じ数字が出てしまう
window.onload = function() {
  let cells = document.querySelectorAll(".tableSection td");
  for (let i = 0; i < cells.length; i++) {
    let givenNumbers = Math.floor(Math.random() * 9) + 1; // 1〜9のランダムな数
    console.log(givenNumbers); // OK
    cells[i].innerHTML = givenNumbers; // 各セルにランダムな数値を代入
  }
};

//上記からランダムに数字を消す。
//レベルが上がるごとにセクションが増えていく。
//増え方のロジックは１，９，１８、３６？
