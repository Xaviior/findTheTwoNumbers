// Selectors
const generateNumberBtn = document.getElementById("genBtn");
const submitBtn = document.getElementById("subBtn");
const guessForm = document.querySelector("#guessNum");
const notifications = document.getElementById("notifications-text");
const TBody = document.getElementById("tableBody");
let guessAttempt = null;
guessForm.disabled = true;
submitBtn.disabled = true;
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
  const randNum = Math.floor(Math.random() * 90) + 10;
  console.log(randNum);
  hiddenNum = randNum.toString();
  notifications.innerText = `You have generated a new number`;
  generateNumberBtn.disabled = true;
  guessForm.disabled = false;
  submitBtn.disabled = false;
});
// submitt btn

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  guessForm.value.toString();
  console.log(guessForm.value.toString());
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
  th.innerHTML = guessAttempt;
  tr.append(td);
  td.innerHTML = guessForm.value;
}
