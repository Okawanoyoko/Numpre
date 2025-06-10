'use strict'

window.onload = function giveNumber() {
  let cells = document.querySelectorAll(("#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9"));
  console.log(cells);//Nodeの集合.length があるがarrayじゃないらしい。全9td
  const alreadyGotNums = [];//既出の数字を入れていく配列
  for (let i = 0; i < cells.length; i++) { //0-9までの９つを
    let givenNumbers = Math.floor(Math.random() * 9) + 1; 
    //ランダムに取得して整数にして箱に入れる

    if(!alreadyGotNums.includes(givenNumbers)) {//もしまだ配列にないなら
       alreadyGotNums.push(givenNumbers); // 配列に格納して
       cells[i].innerHTML = givenNumbers;   //かつHTMLに払いだす
       console.log(alreadyGotNums);//確認用
    }  
    } 
};



