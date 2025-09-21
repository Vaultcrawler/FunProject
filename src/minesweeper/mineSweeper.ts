export type Cell = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;
};

export class Minesweeper {
  board: Cell[][];
  rows: number;
  cols: number;
  mines: number;
  gameOver: boolean;

  constructor(rows = 8, cols = 8, mines = 10) {
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    this.gameOver = false;
    this.board = this.generateBoard();
  }

  generateBoard(): Cell[][] {
    // Create empty board
    const board: Cell[][] = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );
    // Place mines
    let placed = 0;
    while (placed < this.mines) {
      const r = Math.floor(Math.random() * this.rows);
      const c = Math.floor(Math.random() * this.cols);
      if (!board[r]![c]!.isMine) {
        board[r]![c]!.isMine = true;
        placed++;
      }
    }
    // Calculate adjacent mines
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (!board[r]![c]!.isMine) {
          board[r]![c]!.adjacentMines = this.countAdjacentMines(board, r, c);
        }
      }
    }
    return board;
  }

  countAdjacentMines(board: Cell[][], row: number, col: number): number {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          if (board[nr]![nc]!.isMine) count++;
        }
      }
    }
    return count;
  }

  reveal(row: number, col: number): void {
    if (this.gameOver || this.board[row]![col]!.isRevealed || this.board[row]![col]!.isFlagged) return;
    this.board[row]![col]!.isRevealed = true;
    if (this.board[row]![col]!.isMine) {
      this.gameOver = true;
      return;
    }
    if (this.board[row]![col]!.adjacentMines === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
            if (!this.board[nr]![nc]!.isRevealed) {
              this.reveal(nr, nc);
            }
          }
        }
      }
    }
  }

  toggleFlag(row: number, col: number): void {
  if (this.gameOver || this.board[row]![col]!.isRevealed) return;
  this.board[row]![col]!.isFlagged = !this.board[row]![col]!.isFlagged;
  }

  isWin(): boolean {
    if (!this.board) return false;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const cell = this.board[r]?.[c];
        if (!cell) return false;
        if (!cell.isMine && !cell.isRevealed) return false;
      }
    }
    return true;
  }
}
