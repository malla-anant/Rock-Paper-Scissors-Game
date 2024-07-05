let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const drawGame = () => {
    msg.innerText = "GAME WAS DRAW. PLAY AGAIN!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! YOUR ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} BEATS YOUR ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    
    //generate computer choice...
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //sci , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock , sci
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});