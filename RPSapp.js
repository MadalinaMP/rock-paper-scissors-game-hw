const options = ["ROCK", "PAPER", "SCISSORS"];

function pickOption() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(userChoice, computerChoice) {
    const theUser = "User";
    const theComputer = "Computer"

    if (userChoice === options[0] && computerChoice === options[1]) {
        return console.log(theComputer + " WINS with: " + computerChoice + " !");
    } else if (userChoice === options[0] && computerChoice === options[2]) {
        return console.log(theUser + " WINS with: " + userChoice + " !")
    } else if (userChoice === options[1] && computerChoice === options[0]) {
        return console.log(theUser + " WINS with: " + userChoice + " !");
    } else if (userChoice === options[1] && computerChoice === options[2]) {
        return console.log(theComputer + " WINS with: " + computerChoice + " !");
    } else if (userChoice === options[2] && computerChoice === options[0]) {
        return console.log(theComputer + " WINS with: " + computerChoice + " !");
    } else if (userChoice === options[2] && computerChoice === options[1]) {
        return console.log(theUser + " WINS with: " + userChoice + " !");
    } else if (userChoice === computerChoice) {
        return console.log("It's a tie!")
    }
}

function play() {
    const user = pickOption();
    console.log("User chose: " + user);

    const computer = pickOption();
    console.log("Computer chose: " + computer);

    checkWinner(user, computer);
}

play();

console.log("Refresh the page for another round.")