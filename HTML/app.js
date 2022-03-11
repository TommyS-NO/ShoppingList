alert("Velkommen til Shop Shop App");
alert
("Skriv inn produktet der det hører hjemme");
//--------------------------------------------------------------//

//-------------------Container One--------------------------//
let firstList = document.getElementById("product-one-list");
let firstArray =[];

function addToListOne() {
  let firstListInput = document.getElementById("product-one").value;
  if (firstListInput == "") {
    alert("Mangler innhold");
  } else {
    firstArray.push(firstListInput);
  }
  viewFirstList();
}

function viewFirstList() {
  firstList.innerHTML = "";
  for (let i = 0; i < firstArray.length; i++) {
    firstList.innerHTML += `<div class="one">${[i + 1]}<p>${firstArray[i]}</p>
    <button id="del-btn" onclick="deleteOne(${i})">Slett</button></div>`;
  }
}
function deleteOne(i) {
  let confirmUser = prompt("Vil du slette? ja eller nei");
  if (confirmUser == "ja") {
    firstArray.splice(i, 1);
    alert("Poff Borte");
  } else {
    alert("Ikke slettet");
  }
  viewFirstList();
}

//---------------------------Container Two-------------------------//

let secondList = document.getElementById("product-two-list");
let secondArray =[];

function addToListTwo () {
  let listTwoInput = document.getElementById("product-two").value;
  if (listTwoInput == "") {
    alert("Mangler innhold");
  } else {
    secondArray.push(listTwoInput);
  }
  viewSecondList();
}

function viewSecondList() {
  secondList.innerHTML = "";
  for (let i = 0; i < secondArray.length; i++) {
    secondList.innerHTML += `<div class="two">${[i + 1]}<p>${secondArray[i]}</p>
    <button id="del-btn" onclick="deleteTwo(${i})">Slett</button></div>`;
  }
}
function deleteTwo(i) {
  let confirmUser = prompt("Vil du slette? ja eller nei");
  if (confirmUser == "ja") {
    secondArray.splice(i, 1);
    alert("Poff Borte");
  } else {
    alert("Ikke slettet");
  }
  viewSecondList();
}

//----------------------Container Three-----------------------------------//
let thirdList = document.getElementById("product-three-list");
let thirdArray = [];

function addToListThree() {
  let thirdListInput = document.getElementById("product-three").value;
  let priceThirdList = parseInt(
    document.getElementById("product-price").value
  );

  if (priceThirdList > 0) {
    thirdArray.push({
      item: thirdListInput,
      price: priceThirdList,
    });
  } else {
    alert("Ukjent Pris. Må være høyere enn 0");
  }
    viewThirdList();
}
function viewThirdList() {
  thirdList.innerHTML = "";
  for (let i = 0; i < thirdArray.length; i++) {
    thirdList.innerHTML += `<div class="three">${[i + 1]}<p>${thirdArray[i].item}</p>
    <h4>Pris: ${thirdArray[i].price} kr</h4>
    <button id="del-btn" onclick="deleteThree(${i})">Slett</button></li>`;
  }

  sumAllList();
}
const totSum = document.getElementById("sumProductThree");

let total = 0;

function sumAllList() {
  let total = 0;
  for (let i = 0; i < thirdArray.length; i++) {
    total += thirdArray[i].price;
    totSum.innerHTML = total;
  }
}

function deleteThree(i) {
  let confirmUser = prompt("Vil du slette? ja eller nei");
  if (confirmUser == "ja") {
    thirdArray.splice(i, 1);
    alert("Poff Borte");
  } else {
    alert("Ikke slettet");
  }
    viewThirdList();
  }