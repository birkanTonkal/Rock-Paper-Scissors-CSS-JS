
const start = () => {
    const playButton = document.querySelector(".button button");

playButton.addEventListener("click", function() {
    const intro = document.querySelector(".intro");
    const game = document.querySelector(".game");

    intro.style.opacity = "0"
    game.style.opacity = "1"

    intro.style.pointerEvents = "none";
    game.style.pointerEvents = "all";
    

});
}


const game = () => {

    const computerChoice = () => {
        let hands = ["rock", "paper", "scissors"];
        return hands[Math.floor(Math.random() * 3)];
    }

    const animationStart = (computerPick, playerPick) => {
        document.querySelector(`.picks_computer .${computerPick}`).style.animation = "shake 0.2s 5 linear";
        playerPick.style.animation = "shake 0.2s 5 linear ";
    
    }
    
    const animationEnd = (computerPick, playerPick) => {
        let img = document.querySelector(`.picks_computer .${computerPick}`);
        img.addEventListener("animationend", () => {
            img.style.animation = "";
        })

        playerPick.addEventListener("animationend", () => {
            playerPick.style.animation = "";
        })
    }
    const winAnimation = (winner) => {
        winner.style.animation = "winner 0.2s 3 linear";
    }
    const winAnimationEnd = (winner) => {
        winner.addEventListener("animationend", () => {
            winner.style.animation = "";
        })
    }
   
    const handSigns = document.querySelectorAll(".picks_player img");
    
    
    handSigns.forEach (handSign => {
        handSign.addEventListener("click", ()=> {
            let player = document.querySelector(".player-score");
            let computer = document.querySelector(".comp-score")
            let playerPick = handSign.className;
            let computerPick = computerChoice();
            let playerScore = document.querySelector(".player-score span");
            let compScore = document.querySelector(".comp-score span");
            
            animationStart(computerPick, handSign);
            animationEnd(computerPick,handSign);

            
            setTimeout(() => {
                if ( playerPick === computerPick){

                }
                else {
                    if (playerPick === "rock") {
                        if (computerPick === "scissors") {
                            
                            playerScore.innerHTML = `${Number(playerScore.innerHTML) + 1}`;
                            winAnimation(player);
                            winAnimationEnd(player);
                            return;
                        }
    
                        else {
    
                            compScore.innerHTML = `${Number(compScore.innerHTML) + 1}`;
                            winAnimation(computer);
                            winAnimationEnd(computer);
                            return;
                        }
                    }
                    else if (playerPick === "paper"){
    
                        if (computerPick === "rock") {
    
                            playerScore.innerHTML = `${Number(playerScore.innerHTML) + 1}`;
                            winAnimation(player);
                            winAnimationEnd(player);
                            return;
                        }
    
                        else {

                            compScore.innerHTML = `${Number(compScore.innerHTML) + 1}`;
                            winAnimation(computer);
                            winAnimationEnd(computer);
                            return;
                        }
                    }
                    else {
                        if (computerPick === "paper") {
    
                            playerScore.innerHTML = `${Number(playerScore.innerHTML) + 1}`;
                            winAnimation(player);
                            winAnimationEnd(player);
                            return;
                        }
    
                        else {

                            compScore.innerHTML = `${Number(compScore.innerHTML) + 1}`;
                            winAnimation(computer);
                            winAnimationEnd(computer);
                            return;
                        }
                    }
                }
            }, 1000)
            
        })
    })

};

start();
game();
 




