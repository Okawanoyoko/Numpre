'use strict'

// window.onload = function giveNumber() {
//   let cells = document.querySelectorAll(("#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9"));
//   console.log(cells);//Nodeの集合.length があるがarrayじゃないらしい。全9td
//   const alreadyGotNums = [];//既出の数字を入れていく配列
//   for (let i = 0; i < cells.length; i++) { //0-9までの９つを
//     let givenNumbers = Math.floor(Math.random() * 9) + 1; 
//     //ランダムに取得して整数にして箱に入れる

//     if(!alreadyGotNums.includes(givenNumbers)) {//もしまだ配列にないなら
//        alreadyGotNums.push(givenNumbers); // 配列に格納して
//        cells[i].innerHTML = givenNumbers;   //かつHTMLに払いだす
//        console.log(alreadyGotNums);//確認用
//     }  
//     } 
// };

//新作。縦横軸で重複発生
window.onload = function giveNumber() {
   let tables = document.querySelectorAll("#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9");

   for (const table of tables) { 
      const alreadyGotNums = []; // 取得済みの数字の箱　配列

      for (const cell of table.children) { //子要素をループ
         let givenNumbers = Math.floor(Math.random() * 9) + 1;//ここでランダム数字
         while (alreadyGotNums.includes(givenNumbers)) { 
            givenNumbers = Math.floor(Math.random() * 9) + 1;//箱にすでにある限り新しい数字をゲットするまで繰り返す
         }
         alreadyGotNums.push(givenNumbers); // 記録
         cell.innerHTML = givenNumbers; // 各セルに数値をセット
      }
   }
};


