// Selectors and holders :
const generateNumberBtn = document.getElementById("genBtn");
const submitBtn = document.getElementById("subBtn");
const resetBtn = document.getElementById("resetBtn");
const guessForm = document.querySelector("#guessNum");
const notifications = document.getElementById("notifications-text");
const tBody = document.getElementById("tableBody");
const info = document.getElementById("info");
let guessAttempt = null;
let hiddenNum = null;
let chosenNum = null;
turnOff();

// regex Validation
const validate = (input) => {
  const regex = /^\d{2}$/;
  if (!regex.test(input)) {
    return "Only numbers from 10 - 99";
  }
  if (input < 10 || input > 99) {
    return (notifications.innerText = "Only numbers from 10 - 99");
  }
  return false;
};

//buttons
// Number generator
generateNumberBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const randNum = Math.floor(Math.random() * 90) + 10;
  hiddenNum = randNum.toString();
  notifications.innerText = `You have generated a new number`;
  document.getElementById("tableBody").innerHTML = "";
  turnOn();
});
// Reset btn
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("tableBody").innerHTML = "";
  guessAttempt = null;
  notifications.innerText = "";
  turnOff();
});

// submitt btn

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const disAllowed = validate(guessForm.value);
  if (disAllowed) {
    return (notifications.innerText = disAllowed);
  }
  /* guessForm.value.toString(); */
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
  let correctNumbers = 0;
  let correctPosition = 0;
  if (chosenNum === hiddenNum) {
    notifications.innerText = `YOU WIN!!! Number of tries was ${guessAttempt} :)`;
    correctNumbers = 2;
    correctPosition = 2;
    turnOff();
  } else if (chosenNum[0] === hiddenNum[0] || chosenNum[1] === hiddenNum[1]) {
    notifications.innerText = `A number is on the correct spot`;
    correctNumbers = 1;
    correctPosition = 1;
  } else if (chosenNum[0] === hiddenNum[1] && chosenNum[1] === hiddenNum[0]) {
    notifications.innerText = `Two numbers is correct, but not the right spot`;
    correctNumbers = 2;
    correctPosition = 0;
  } else if (chosenNum[0] === hiddenNum[1] || chosenNum[1] === hiddenNum[0]) {
    notifications.innerText = `A number is correct, but not the right spot`;
    correctNumbers = 1;
    correctPosition = 0;
  } else {
    notifications.innerText = "None numbers is correct, try again!";
  }
  return [correctNumbers, correctPosition];
}

function turnOn() {
  guessForm.disabled = false;
  submitBtn.disabled = false;
  generateNumberBtn.disabled = true;
  resetBtn.disabled = false;
  /* info.style.visibility = "hidden"; */
  fadeOutEffect();
}
function turnOff() {
  guessForm.disabled = true;
  submitBtn.disabled = true;
  generateNumberBtn.disabled = false;
  resetBtn.disabled = true;
  info.style.visibility = "visible";
}
function fadeOutEffect() {
  const fadeTarget = document.getElementById("info");
  const fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 70);
}
