let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let msg= document.querySelector(".win-btn");
let hid= document.querySelector(".hid");

let turn = true;

const arr = [
    [0,1,2], [0,3,6], [0,4,8] , [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        
        if(turn){box.innerText = "X";}
        else{box.innerText = "O";}
        turn =!(turn);
        box.disabled = true;

        checkwinner();
    });
});

const showwinner= (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    for(let box of boxes){
        box.disabled = true;
    }
    // hid.classList.remove("hid");
}

const checkwinner= () =>{
    let draw = 1;
    for(p of arr){
        if(boxes[p[1]].innerText==="" || boxes[p[2]].innerText==="" || boxes[p[0]].innerText===""){
            draw=0;
        }
        if(boxes[p[1]].innerText!=="" && boxes[p[2]].innerText!=="" && boxes[p[0]].innerText!==""){
            if(boxes[p[1]].innerText===boxes[p[2]].innerText && boxes[p[0]].innerText===boxes[p[2]].innerText){
                // console.log(, "is winner");
                showwinner(boxes[p[0]].innerText);
                draw=0;
            }
        }
    }
    console.log(draw);
    if(draw){
        msg.innerText = "Draw";
    }
}

const resetgame=()=>{
    turn = true;
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
    }
    msg.innerText="";
}

resetbtn.addEventListener("click", resetgame);

    