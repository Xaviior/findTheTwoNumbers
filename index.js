// Selectors
const generateNumberBtn = document.getElementById("genBtn");
const submitBtn = document.getElementById("subBtn");
const guessForm = document.querySelector("#guessNum");
const notifications = document.getElementById("notifications-text");
const TBody = document.getElementById("tableBody");
let guessAttempt = null;

//holders
let hiddenNum = null;

// Number Generator
function numbers() {
  const number = Math.floor(Math.random() * 99) + 1;
  return number;
  console.log(number);
}
//buttons
// Number generator
generateNumberBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const randNum = Math.floor(Math.random() * 99) + 1;
  console.log(randNum);
  hiddenNum = parseInt(randNum);
  notifications.innerText = `You have generated a new number`;
});
// submitt btn
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  parseInt(guessForm.value);
  console.log(guessForm.value);
  notifications.innerText = `Your number is ${guessForm.value}`;
  guessAttempt += 1;
  addLine();
});

function addLine() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  TBody.append(tr);
  tr.append(th);
  th.scope = "row";
  th.innerText = guessAttempt;
}
