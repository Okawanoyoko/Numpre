'use strict';

//画面を開いた瞬間にデフォルトで設定されているボードを作る
//まずすべてのセルにランダムに数字を割り振る ループ文考え中
window.onload = function() {
  let givenNumbers = Math.floor(Math.random() * 9)+1;
  console.log(givenNumbers);//ok
  let targetCell = document.querySelector(".tableSection td");
  targetCell.innerHTML = givenNumbers; // セルにランダムな数値を代入
}

//上記からランダムに数字を消す。
//レベルが上がるごとにセクションが増えていく。
//増え方のロジックは１，９，１８、３６？
