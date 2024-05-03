let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara=document.querySelector("#Computer-score");
const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const drawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Draw Game";
    msg.style.background="black";
}
const showWinner=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        console.log("You Win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`; 
        msg.style.background= "green";
        
    }else{
        computerscore++;
        compScorepara.innerText=computerscore;
        console.log("You Loose");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.background= "red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //Generate Computer Choice
    const compChoice= genCompChoice();
    console.log("Comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            //paper,scissors
           userwin= compChoice==="paper"?false:true;
;        }else if(userChoice==="paper"){
           //rock,scissors
         userwin= compChoice==="rock" ?true:false;
}
         else{
            // rock,paper
            userwin=compChoice==="rock"?false:true;
         }

         showWinner(userwin,userChoice,compChoice);
}
    }
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
       
        playGame(userChoice);
    })
})