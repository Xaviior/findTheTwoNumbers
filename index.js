// Selectors
const generateNumberBtn = document.getElementById("genBtn");
const submitBtn = document.getElementById("subBtn");
const guessForm = document.querySelector("#guessNum");
const notifications = document.getElementById("notifications-text");
const TBody = document.getElementById("tableBody");
let guessAttempt = null;
let hiddenNum = null;
let chosenNum = null;
turnOff();
// Number Generator
function numbers() {
  const number = Math.floor(Math.random() * 99) + 1;
  return number;
  console.log(number);
}

turnOff();

//buttons
// Number generator
generateNumberBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const randNum = Math.floor(Math.random() * 90) + 10;
  console.log(randNum);
  hiddenNum = randNum.toString();
  notifications.innerText = `You have generated a new number`;
  turnOn();
});
// submitt btn

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  guessForm.value.toString();
  console.log(guessForm.value.toString());
  guessAttempt += 1;
  addLine();
  chosenNum = guessForm.value;
  guessForm.value = "";
  logic();
});

function addLine() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  TBody.append(tr);
  tr.id = "test";
  tr.append(th);
  th.scope = "row";
  th.innerHTML = guessAttempt;
  tr.append(td);
  td.innerHTML = guessForm.value;
}

function logic() {
  if (chosenNum[0] === hiddenNum[0]) {
    console.log("Første Nummer er riktig, og riktig plass");
  }
  if (chosenNum[1] === hiddenNum[1]) {
    console.log("Andre Nummer er riktig, og riktig plass");
  }
  if (chosenNum[0] === hiddenNum[1]) {
    console.log("Ett Nummer er riktig, men på feil plass");
  }
  if (chosenNum[1] === hiddenNum[0]) {
    console.log("Ett Nummer er riktig, men på feil plass");
  }
}

function turnOn() {
  guessForm.disabled = false;
  submitBtn.disabled = false;
  generateNumberBtn.disabled = true;
}
function turnOff() {
  guessForm.disabled = true;
  submitBtn.disabled = true;
  generateNumberBtn.disabled = false;
}
