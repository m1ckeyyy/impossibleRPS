/*const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const winner = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");
let num;

buttons.forEach((n) =>
	n.addEventListener("click", function (e) {
		userChoice.textContent = e.target.textContent;
		// generate random choice
		generateChoice();
		//check winner
		getResult();
	})
);

function generateChoice() {
	num = String(Math.floor(Math.random() * 3 + 1));
	switch (num) {
		case "1":
			computerChoice.textContent = "Rock";
			break;
		case "2":
			computerChoice.textContent = "Paper";
			break;
		case "3":
			computerChoice.textContent = "Scissors";
			break;
	}
}
function getResult() {
	// user wins
	if (
		(userChoice.textContent === "Rock" &&
			computerChoice.textContent === "Scissors") ||
		(userChoice.textContent === "Paper" &&
			computerChoice.textContent === "Rock") ||
		(userChoice.textContent === "Scissors" &&
			computerChoice.textContent === "Paper")
	) {
		winner.textContent = "You";
		console.log("winner=user");
	}
	if (userChoice.textContent === computerChoice.textContent) {
		winner.textContent = "Tie";
	}

	// pc wins
	else {
		winner.textContent = "Computer";
	}
}
*/
const wait = document.querySelector(".wait");
const announcement = document.querySelector(".announcement");
const userChoiceValue = document.querySelector("#userChoiceValue");
const userChoice = document.querySelector("#userChoice");
const balance = document.querySelector("#balance");
const betInput = document.querySelector("#input");
const buttons = document.querySelectorAll("button");
let balanceValue;
let bet;
let choice;
let computerChoice;
//update balance function
function updateBalance() {
	if (balance.innerHTML === " - ") {
		// start = randomize account balance
		balanceValue = Math.trunc(Math.random() * 10000);
		balance.innerHTML = balanceValue;
		return;
	}
	balance.innerHTML = balanceValue;
}
updateBalance();

buttons.forEach((n) =>
	n.addEventListener("click", function (e) {
		//initiate
		init();

		if (Number(betInput.value) !== 0) {
			bet = Number(betInput.value);
			choice = e.target.innerHTML;
			userChoice.innerHTML = choice; //Rock or Paper or Scissors
			switch (choice) {
				case "Rock":
					computerChoice = "Paper";
					break;
				case "Paper":
					computerChoice = "Scissors";
					break;
				case "Scissors":
					computerChoice = "Rock";
					break;
			}
			userChoiceValue.textContent = bet;
			wait.style.visibility = "visible";
			betInput.value = " ";
			//generate winning choice
			setTimeout(
				() => {
					wait.innerHTML = `Computer chosed: ${computerChoice}`;
					announcement.style.visibility = "visible";
					announcement.textContent += ` (-${bet})`;
					balanceValue -= bet;
					updateBalance();
				}, //generate randomly how long will be result load
				Math.floor(Math.random() * 3000 + 1000)
			);
		}
	})
);

function init() {
	announcement.style.visibility = "hidden";
	wait.innerHTML = "Please wait...";
	wait.style.visibility = "hidden";
	announcement.textContent = "You lost";
}
