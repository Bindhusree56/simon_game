let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let h2 = document.querySelector('h2');
let level = 0;
let strt = document.querySelector('#start');

strt.addEventListener("click",()=>{
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranbtn);
}
let gameFlash = (btn) =>{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
let userFlash = (btn) =>{
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){
    console.log("curr level:",level);
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);      
}
function reset(){
    started = false;
    gameSeq=[];userSeq=[];level=0;
}

