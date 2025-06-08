
//★★★DOM:関数イベントに必要なHTMLの要素からとってくる★★★
//DOM:HTMLタグに紐づける変数宣言。
const givenNumbers = document.getElementById("tableSection");
const checkButton = document.getElementById("checkButton");

window.onload = function() {
  givenNumbers = Math.floor(Math.random() * 9)+1;
  console.log(givenNumbers);//ok
  document.getElementById("tableSection").innerHTML = givenNumbers;
}
