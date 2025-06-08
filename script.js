'use strict'

//１つ１つに入れたい
window.onload = function() {
  let givenNumbers = Math.floor(Math.random() * 9)+1; //1-9をランダムに取得＝givenNumbers
  console.log(givenNumbers);//ok
  let targetCell = document.querySelector(".tableSection td"); //htmlの該当箇所を取り込む
  targetCell.innerHTML = givenNumbers; // 払い出す
}

