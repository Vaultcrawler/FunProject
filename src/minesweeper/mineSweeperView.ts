import { Minesweeper } from './mineSweeper';

export class mineSweeperView {
  private game: Minesweeper;
  private container: HTMLElement;

  constructor(containerId: string, rows = 8, cols = 8, mines = 10) {
    this.game = new Minesweeper(rows, cols, mines);
    const el = document.getElementById(containerId);
    if (!el) throw new Error('Container not found');
    this.container = el;
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    // Flags and bombs display
    const flags = this.countFlags();
    const bombs = this.game.mines;
    const infoDiv = document.createElement('div');
    infoDiv.style.display = 'flex';
    infoDiv.style.justifyContent = 'center';
    infoDiv.style.alignItems = 'center';
    infoDiv.style.marginBottom = '1em';
    infoDiv.innerHTML = `<span style="font-size:1.2em;">🚩 ${flags} / 💣 ${bombs}</span>`;
    this.container.appendChild(infoDiv);

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let r = 0; r < this.game.rows; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < this.game.cols; c++) {
        const cell = this.game.board[r]![c]!;
        const td = document.createElement('td');
        td.style.width = '32px';
        td.style.height = '32px';
        td.style.textAlign = 'center';
        td.style.border = '1px solid #888';
        td.style.background = cell.isRevealed ? '#e0e0e0' : '#b0b0b0';
        td.style.cursor = cell.isRevealed ? 'default' : 'pointer';

        // Reveal all bombs on game over
        if (this.game.gameOver && cell.isMine) {
          td.style.background = '#ffb3b3';
          if (cell.isFlagged) {
            td.textContent = '❌';
            td.style.color = 'red';
            td.style.fontWeight = 'bold';
          } else {
            td.textContent = '💣';
          }
        } else if (cell.isRevealed) {
          if (cell.isMine) {
            td.textContent = '💣';
            td.style.background = '#ffb3b3';
          } else if (cell.adjacentMines > 0) {
            td.textContent = String(cell.adjacentMines);
            td.style.color = '#333';
          }
        } else if (cell.isFlagged) {
          td.textContent = '🚩';
        }

        td.oncontextmenu = (e) => {
          e.preventDefault();
          if (!this.game.gameOver) {
            this.game.toggleFlag(r, c);
            this.render();
          }
        };
        td.onclick = () => {
          if (!this.game.gameOver) {
            this.game.reveal(r, c);
            this.render();
            if (this.game.gameOver) {
              setTimeout(() => {
                alert('Game Over!');
                location.reload();
              }, 100);
            } else if (this.game.isWin()) {
              setTimeout(() => {
                alert('You Win!');
                location.reload();
              }, 100);
            }
          }
        };
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    this.container.appendChild(table);
  }

  private countFlags(): number {
    let count = 0;
    for (let r = 0; r < this.game.rows; r++) {
      for (let c = 0; c < this.game.cols; c++) {
        if (this.game.board[r]![c]!.isFlagged) count++;
      }
    }
    return count;
  }
}