let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
// let winner=document.querySelector(val1);

let turnX=true;
const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner= (winner)=> {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if (val1!='' && val2!='' && val3!=''){
            if(val1==val2 && val2==val3){
                console.log("winner",val1);
                showWinner(val1);
           }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turnX){
            box.innerText="X";
            turnX=false;
        } else {
            box.innerText="O";
            turnX=true;
        }
        box.disabled= true;
        checkWinner();
    });
});

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
