function createBoard() {
  for (let index = 0; index < ROWS * COLUMNS; index++) {
    let cell = document.createElement('div');

    cell.id = `cell-${index}`;
    cell.classList.add('cell');

    board.appendChild(cell);
  }
}

const BOARD_SIZE = '600px';
const ROWS = 10;
const COLUMNS = 10;

const board = document.getElementById('board');

board.style.height = BOARD_SIZE;
board.style.width = BOARD_SIZE;
board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

createBoard();
