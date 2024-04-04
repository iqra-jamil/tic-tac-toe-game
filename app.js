let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnO = true;
const winPattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
 enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      box.classList.add("playerO");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("playerX");
      turnO = true;
    }
    box.disabled = true;
    chkWinner();
  });
});
let disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
    //enableBoxes();
  }
};
let enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("playerX", "playerO");
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner} !!!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const chkWinner = () => {
  for (let pattrn of winPattrens) {
    let post1Val = boxes[pattrn[0]].innerText;
    let post2Val = boxes[pattrn[1]].innerText;
    let post3Val = boxes[pattrn[2]].innerText;
    if (post1Val !== "" && post2Val !== "" && post3Val !== "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        console.log("Winner", post1Val);
        showWinner(post1Val);
      }
    }
  }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
