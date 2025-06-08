'use strict';

//★★★DOM:関数イベントに必要なHTMLの要素からとってくる★★★
//DOM:HTMLタグに紐づける変数宣言。
const givenNumbers = document.getElementById("section");
const checkButton = document.getElementById("checkButton");

window.onload = function() {
  let givenNumbers = 1;
  givenNumbers = Math.floor(Math.random() * 9);
  console.log(givenNumbers);//ok
  document.getElementById("section").innerHTML = givenNumbers;
}

//0が表示されてしまう。作成中。
