let boxes = document.querySelectorAll(".box");
let Newgame = document.querySelector("#new-btn");
let message = document.querySelector(".msg-container");
let mess = document.querySelector("#msg");
let resetbutton = document.querySelector("#reset-btn");



let turn0 = true;
let count = 0;

const WinningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    message.classList.add("hide");
}; 

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if(count === 9 && !iswinner){
            gameDraw();
        }
    })
    
})

const gameDraw = () => {
    mess.innerText = `Game was a Draw`;
    message.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
       
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    mess.innerText = `Congratulations, Winner is ${winner}`;
    
    message.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of WinningPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos2val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
                return true;
                
            }
        }
    }
};

Newgame.addEventListener("click", resetGame);
resetbutton.addEventListener("click", resetGame);
