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
  private firstClick: boolean;

  constructor(rows = 8, cols = 8, mines = 10) {
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    this.gameOver = false;
    this.firstClick = true;
    this.board = this.generateEmptyBoard();
  }

  private generateEmptyBoard(): Cell[][] {
    return Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );
  }

  private placeMines(firstRow: number, firstCol: number) {
    // Place mines, but never on the first clicked cell or its neighbors
    let placed = 0;
    const forbidden: Set<string> = new Set();
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nr = firstRow + dr;
        const nc = firstCol + dc;
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          forbidden.add(`${nr},${nc}`);
        }
      }
    }
    while (placed < this.mines) {
      const r = Math.floor(Math.random() * this.rows);
      const c = Math.floor(Math.random() * this.cols);
      if (!this.board[r]![c]!.isMine && !forbidden.has(`${r},${c}`)) {
        this.board[r]![c]!.isMine = true;
        placed++;
      }
    }
    // Calculate adjacent mines
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (!this.board[r]![c]!.isMine) {
          this.board[r]![c]!.adjacentMines = this.countAdjacentMines(this.board, r, c);
        }
      }
    }
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

    if (this.firstClick) {
      // Place mines after first click, ensure first cell is empty (adjacentMines === 0)
      let safe = false;
      while (!safe) {
        // Reset board
        this.board = this.generateEmptyBoard();
        this.placeMines(row, col);
        if (!this.board[row]![col]!.isMine && this.board[row]![col]!.adjacentMines === 0) {
          safe = true;
        }
      }
      this.firstClick = false;
    }

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
