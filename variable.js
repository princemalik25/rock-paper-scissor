let userscore = 0;
let compscore = 0;
const rpc = document.querySelectorAll(".rpc");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const btn = document.querySelector("#btn");

const resetScore = () =>{
    userscore = 0; 
    compscore = 0;
    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;
    msg.innerText = "play your move"
};

btn.addEventListener("click", resetScore );


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];

}

const drawGame = () => {

    // console.log("its a draw");
    msg.innerText = "its draw ! play again";
};

const showWinner = (userWin) => {
    if (userWin) {
        // console.log("you win");
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "you win !";
    }
    else {
        // console.log("you lose");
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = "you lose !";
    }

};

const playGames = (userChoice) => {
    console.log("userChoice", userChoice);
    const compChoice = genCompChoice();
    console.log("compchoice ", compChoice);

    let userWin = true;
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}


    rpc.forEach((rpc) => {
        rpc.addEventListener("click", () => {
            const userChoice = rpc.getAttribute("id");
            playGames(userChoice);
        })
    })

