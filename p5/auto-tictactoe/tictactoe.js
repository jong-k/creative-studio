const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const players = ["X", "O"];

let currentPlayer;
const available = [];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  currentPlayer = floor(random(players.length));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      available.push([j, i]);
    }
  }
}

function equals3(a, b, c) {
  return a === b && b === c && a !== "";
}

function checkWinner() {
  let winner;

  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) winner = board[i][0];
  }

  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) winner = board[0][i];
  }

  if (equals3(board[0][0], board[1][1], board[2][2])) winner = board[0][0];
  if (equals3(board[2][0], board[1][1], board[0][2])) winner = board[2][0];

  return !winner && !available.length ? "tie" : winner;
}

function nextTurn() {
  const index = floor(random(available.length));
  const spot = available.splice(index, 1)[0];
  board[spot[0]][spot[1]] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

// function mousePressed() {
//   nextTurn();
// }

function draw() {
  background(255);
  const w = width / 3;
  const h = height / 3;
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const x = w * j + w / 2;
      const y = h * i + h / 2;
      const spot = board[j][i];
      textSize(32);
      if (spot === players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot === players[0]) {
        const xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }

  const result = checkWinner();
  if (result) {
    noLoop();
    let resultP = createP("");
    resultP.style("font-size", "32pt");
    if (result === "tie") resultP.html("Tie!");
    else resultP.html(`${result} wins!`);
  } else {
    nextTurn();
  }
}
