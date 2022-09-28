// Tik Tak Toe
// Author: Farnaz Towhidi

const state = {
  board: [],
  player: "X",
  playerClickedPos: [],
  winner: "",
};
const winCondition = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
];

const ElBoard = document.getElementById("board");
const ElCells = document.querySelectorAll(".cell");
const ElBtn = document.querySelector("input");

ElBtn.addEventListener("click", resetGame);
ElBoard.addEventListener("click", function (e) {
  // step 1, update the board
  if (!e.target.textContent) {
    e.target.textContent = state.player;

    // step 2: update the player Array
    ElCells.forEach((cells, index) => {
      cells.textContent == state.player
        ? (state.playerClickedPos[index] = 1)
        : (state.playerClickedPos[index] = 0);
    });

    checkWin(state.playerClickedPos);
    switchPlayer();
  }
});

function checkWin(inputArr) {
  const ElP = document.createElement("p");
  winCondition.forEach((condition) => {
    if (condition.join("") == inputArr.join(""))
      document.querySelector(".winner").textContent =
        "The winner is " + state.player + " Hora";
  });
}

function switchPlayer() {
  state.player === "X" ? (state.player = "O") : (state.player = "X");
}

function resetGame() {
  ElCells.forEach((cells, index) => {
    cells.textContent = "";
  });
}
