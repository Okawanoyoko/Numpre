window.onload = function() {
  let cells = document.querySelectorAll(".tableSection td");
  console.log(cells);//Nodeの集合.length があるがarrayじゃないらしい。９。
  for (let i = 0; i < cells.length; i++) { //0-9までの９つを
    let givenNumbers = Math.floor(Math.random() * 9) + 1; 
    const alreadyGotNums = [];
    alreadyGotNums.push(givenNumbers);
    //ランダムに取得して整数にして箱に入れる
    console.log(givenNumbers);
    if(!alreadyGotNums.includes(givenNumbers)) {// OK
    cells[i].innerHTML = givenNumbers;
    }    //それを払いだす。
    } 
};
