// this is the js file for the project which is completed.

let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let changeUserScore = document.querySelector("#userScore");
let changeCompScore = document.querySelector("#compScore");
let indication = document.querySelector("#indicate");

// console.log(choices);

/*  This is the section where all the events like click are triggers and functions are called for the actions  */ 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        let compChoice = genCompChoice();
        playGame(userChoice, compChoice);
    })
})


/*  this is the Main function which decides the output/Result.  */ 

let playGame = (userChoice, compChoice) => {
    console.log(userChoice, compChoice);
    if (userChoice === compChoice) {
        draw();
    }
    else {
        if (userChoice === "paper" & compChoice === "rock") {
            // console.log(`${userChoice} beats ${compChoice} you Win.`);
            win(userChoice, compChoice);
        }
        else if (userChoice === "rock" & compChoice === "scissor") {
            // console.log(`${userChoice} beats ${compChoice} You Win`);
            win(userChoice, compChoice);
        }
        else if (userChoice === "scissor" & compChoice === "paper") {
            // console.log(`${userChoice} beats ${compChoice}. You Win`);
            win(userChoice, compChoice);
        }
        else {
            // console.log(`${compChoice} beats ${userChoice} You Lose`);
            lose(userChoice, compChoice);
        }
    }
}

/*  This Function is used to generate the Computers choice.  */ 

let genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    // console.log(options[randIdx],randIdx);
    return options[randIdx];
}

/*  This is a DRAW function  */ 

let draw = () => {
    indication.innerHTML = "It was a draw ";
    indication.style.background = "#3b3b3b"
    console.log("Draw");
}

/*  This is a WIN functions  */ 

let win = (userChoice, compChoice) => {
    userScore++;
    changeUserScore.innerHTML = userScore;
    indication.innerHTML = `You Win. ${userChoice} beats ${compChoice}.`;
    indication.style.background = "green";
    console.log(`${userChoice} beats ${compChoice} you Win.`);
}

/*  This is a LOSE function  */ 
let lose = (userChoice, compChoice) => {
    compScore++;
    changeCompScore.innerHTML = compScore;
    indication.style.background = "red"; 
    indication.innerHTML = `You Lose. ${compChoice} beats ${userChoice}.`
    console.log(`${compChoice} beats ${userChoice} You Lose`);
}