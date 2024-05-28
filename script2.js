const boxes = document.querySelectorAll(".boxes");
const resetbtn = document.querySelector("#reset");

let chance = true;
let count = 0;
const winCon = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (chance === true) {
      boxes.innerText = "X";
      chance = false;
    } else {
      boxes.innerText = "O";
      chance = true;
    }
    boxes.disabled=true;
    count++;
    if(checkWinner())
        {
            return;
        }
    if(count===9 && !checkWinner())
        {
            draw();
        }
  });
});

let checkWinner=()=>{
    for( let pattern of winCon)
        {
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 !="" && pos2!="" && pos3!="")
                {
                    if(pos1===pos2 && pos2===pos3)
                        {
                            winner(pos1);
                            return true;
                        }
                }
        }
};

function winner(winnerNamee){
    alert(`Congratulations!,Winner is Player ${winnerNamee}`)
    disabled();
}

const draw=()=>{
    alert("Game was draw")
    disabled();
};
const disabled=()=>{
    for(let boxx of boxes)
        {
            boxx.disabled=true;
        }
};
const enable=()=>{
    for( let boxx of boxes)
        {
            boxx.innerText="";
            boxx.disabled=false;
            chance=true;
            count=0;
        }
};

resetbtn.addEventListener("click",enable);