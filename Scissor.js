let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg")
const userPara = document.querySelector("#user")
const compPara = document.querySelector("#comp")

const compPlay = () =>{
    options = ["rock", "paper", "scissor"]
    const rand =  Math.floor(Math.random()*3)
    return options[rand];
}

const draw = () =>{
    msg.innerText="Game Was Draw. Play Again"
    msg.style.backgroundColor="#081b31";
}

const show = (w, k, l) =>{
    if(w)
    {
        userScore++
        userPara.innerText=userScore
        msg.innerText=`You Won! Your ${k} beats ${l}`
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++
        compPara.innerText = compScore
        msg.innerText=`You Lost. ${l} beats Your ${k}`
        msg.style.backgroundColor="red";
    }
}

const play = (pl) =>{
    const compC = compPlay()
    if(pl === compC)
    {
        draw()
    }
    else
    {
        let win = true;
        if(pl==="rock")
        {
            win = compC==="paper"?false:true
        }
        else if(pl==="paper")
        {
            win = compC==="scissor"?false:true
        }
        else
        {
            win = compC==="rock"?false:true
        }
        show(win, pl, compC)
    }
}

const choices = document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id")
        play(userChoice)
    })
})