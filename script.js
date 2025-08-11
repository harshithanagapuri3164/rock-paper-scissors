let uscore = 0;
let cscore = 0;

let divs = document.querySelectorAll(".div");
let res = document.querySelector("#track");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let endRes = document.querySelector("#end");

let drawGame = () => {
    res.innerText = "Game was a DRAW"
    res.style.backgroundColor = "rgb(11, 31, 52)";
}

let compId = ()=>{
    compChoice = ["Rock", "Paper", "Scissor"];
    idx = Math.floor(Math.random()*3);
    return compChoice[idx];

}

divs.forEach((div)=>{
    div.addEventListener("click",()=>{
    const userRes = div.getAttribute("id");
    game(userRes);
    })
})

let showWinner = (userWin, userRes, compRes) =>{
    if(userWin){
        uscore++;
        userScore.innerText = uscore;
        res.innerText = `YOU WIN!. Your ${userRes} beats ${compRes}`;
        res.style.backgroundColor = "green";
    }else{
        cscore++;
        compScore.innerText = cscore;
        res.innerText = `YOU LOSE!.  ${compRes} beats your ${userRes}`;
        res.style.backgroundColor = "red";
    }

}

let game = (userRes)=>{
    //generate computer choice
    let compRes = compId();
    if(userRes === compRes){
        drawGame();
    }
    else{
        let userWin = true;
        if(userRes === "Rock"){
            userWin = compRes === "Paper" ? false : true;
        }
        else if(userRes === "Paper"){
            userWin = compRes === "Scissor" ? false : true;
        }
        else{
            userWin = compRes === "Rock" ? false : true;
        }
        
        showWinner(userWin, userRes, compRes);
    }
    

}

// endRes.addEventListener("click",() =>{
//     if(uscore >= cscore){
//         res.innerText = "YOU WIN";
//         res.style.backgroundColor = "green";
//         // endRes.style.visibility = "hidden";
//     }
//     else if(uscore <= cscore){
//         res.innerText = "YOU LOSE";
//         res.style.backgroundColor = "red";
//         // endRes.style.visibility = "hidden";
//     }
//     else if(uscore === cscore){
//         res.innerText = "DRAW GAME";
//         res.style.backgroundColor = "rgb(11, 31, 52)";
//         // endRes.style.visibility = "hidden";
//     }
//     endRes.style.visibility = "hidden";
//     divs.style = "disable"
// })