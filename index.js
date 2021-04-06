// Selectors and holders :
const generateNumberBtn = document.getElementById("genBtn");
const submitBtn = document.getElementById("subBtn");
const guessForm = document.querySelector("#guessNum");
const notifications = document.getElementById("notifications-text");
const tBody = document.getElementById("tableBody");
let guessAttempt = null;
let hiddenNum = null;
let chosenNum = null;
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
  chosenNum = guessForm.value;
  const result = checkResult();
  addLine(...result);
  guessForm.value = "";
});

function addLine(correctNumbers = 0, correctPosition = 0) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const guessCell = document.createElement("td");
  const correctNumbersCell = document.createElement("td");
  const correctPositionCell = document.createElement("td");
  tBody.append(tr);
  tr.id = "test";
  tr.append(th);
  th.scope = "row";
  th.innerText = guessAttempt;
  guessCell.innerText = guessForm.value;
  correctNumbersCell.innerText = correctNumbers;
  correctPositionCell.innerText = correctPosition;
  tr.append(guessCell);
  tr.append(correctNumbersCell);
  tr.append(correctPositionCell);
}
function checkResult() {
  let correctNumbers = 0
  let correctPosition = 0
  if (chosenNum === hiddenNum) {
    console.log("begge nummer er riktig");
    notifications.innerText = `YOU WIN!!!`;
    correctNumbers = 2
    correctPosition = 2
  } else if (chosenNum[0] === hiddenNum[0] || chosenNum[1] === hiddenNum[1]) {
    console.log("Ett av nummerene er riktig, og riktig plass");
    notifications.innerText = `A number is on the correct spot`;
    correctNumbers = 1
    correctPosition = 1
  } else if (chosenNum[0] === hiddenNum[1] || chosenNum[1] === hiddenNum[0]) {
    console.log("Ett Nummer er riktig, men på feil plass");
    notifications.innerText = `A number is correct, but not the right spot`;
    correctNumbers = 1
    correctPosition = 1
  } else {
    console.log("ingen er riktige");
  }
  return [correctNumbers, correctPosition]
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
