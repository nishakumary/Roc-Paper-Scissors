let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerHTML = "Game was draw ! Play again";
    msg.style.backgroundColor = "rgb(7, 14, 49)";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "Paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false: true;
        }else{
            userWin = compChoice === "rock"  ? false: true;
        }
        showWinner(userWin , userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);


    });
});