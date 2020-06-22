function createBoard() {
  updateBoardAttributes();
  for (let index = 0; index < rows * columns; index++) {
    let cell = document.createElement('div');

    cell.id = `cell-${index}`;
    cell.classList.add('cell');

    board.appendChild(cell);
  }
}

function updateBoardAttributes() {
  rows = rowInput.value;
  columns = columnInput.value;
  board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function clearBoard() {
  board.innerHTML = '';
}

const BOARD_SIZE = '600px';
let rows = 10;
let columns = 10;

const board = document.getElementById('board');
const rowInput = document.querySelector('#rows-input');
const columnInput = document.querySelector('#columns-input');

board.style.height = BOARD_SIZE;
board.style.width = BOARD_SIZE;

rowInput.value = 10;
columnInput.value = 10;

createBoard();

rowInput.addEventListener('input', () => {
  clearBoard();
  createBoard();
});

columnInput.addEventListener('input', () => {
  clearBoard();
  createBoard();
});
