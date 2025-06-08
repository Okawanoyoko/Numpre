'use strict';

//★★★DOM:関数イベントに必要なHTMLの要素からとってくる★★★
//DOM:HTMLタグに紐づける変数宣言。
const givenNumbers = document.getElementById("section");
const oneToTenBox = [1,2,3,4,5,6,7,8,9];
const checkButton = document.getElementById("checkButton");

window.onload = function() {
  const givenNumbers = Math.floor(Math.random() * 9);
  console.log(givenNumbers);
}



途中
