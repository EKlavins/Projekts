// Core Tetris engine: grid, pieces, rotation, scoring, gravity. No rendering/input here.
const COLS = 10;
const VISIBLE_ROWS = 20;
const HIDDEN_ROWS = 2;
const TOTAL_ROWS = VISIBLE_ROWS + HIDDEN_ROWS;

const PIECE_SHAPES = {
  I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
};

const PIECE_TYPES = ["I", "O", "T", "S", "Z", "J", "L"];
const KICK_OFFSETS = [[0, 0], [-1, 0], [1, 0], [0, -1], [-2, 0], [2, 0], [0, -2]];

function rotateMatrixCW(matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      result[x][n - 1 - y] = matrix[y][x];
    }
  }
  return result;
}

function shapeCells(matrix) {
  const cells = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x]) cells.push({ x, y });
    }
  }
  return cells;
}

function shuffledBag() {
  const bag = [...PIECE_TYPES];
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  return bag;
}

class TetrisGame {
  constructor() {
    this.onLinesCleared = null;
    this.onGameOver = null;
    this.onLock = null;
    this.reset();
  }

  reset() {
    this.grid = Array.from({ length: TOTAL_ROWS }, () => new Array(COLS).fill(null));
    this.bag = shuffledBag();
    this.score = 0;
    this.level = 1;
    this.lines = 0;
    this.holdType = null;
    this.holdUsed = false;
    this.gameOver = false;
    this.paused = false;
    this.dropAccumulator = 0;
    this.current = this._newPiece(this._takeFromBag());
    this.nextType = this._takeFromBag();
  }

  _takeFromBag() {
    if (this.bag.length === 0) this.bag = shuffledBag();
    return this.bag.shift();
  }

  _newPiece(type) {
    const matrix = PIECE_SHAPES[type];
    const size = matrix.length;
    return {
      type,
      matrix,
      x: Math.floor((COLS - size) / 2),
      y: type === "I" ? 0 : 0,
    };
  }

  get dropIntervalMs() {
    return Math.max(100, 1000 - (this.level - 1) * 80);
  }

  _collides(matrix, px, py) {
    const cells = shapeCells(matrix);
    for (const c of cells) {
      const gx = px + c.x;
      const gy = py + c.y;
      if (gx < 0 || gx >= COLS || gy >= TOTAL_ROWS) return true;
      if (gy >= 0 && this.grid[gy][gx]) return true;
    }
    return false;
  }

  moveLeft() {
    if (this.paused || this.gameOver) return;
    const p = this.current;
    if (!this._collides(p.matrix, p.x - 1, p.y)) p.x -= 1;
  }

  moveRight() {
    if (this.paused || this.gameOver) return;
    const p = this.current;
    if (!this._collides(p.matrix, p.x + 1, p.y)) p.x += 1;
  }

  rotate() {
    if (this.paused || this.gameOver) return;
    const p = this.current;
    if (p.type === "O") return;
    const rotated = rotateMatrixCW(p.matrix);
    for (const [dx, dy] of KICK_OFFSETS) {
      if (!this._collides(rotated, p.x + dx, p.y + dy)) {
        p.matrix = rotated;
        p.x += dx;
        p.y += dy;
        return;
      }
    }
  }

  softDrop() {
    if (this.paused || this.gameOver) return false;
    const p = this.current;
    if (!this._collides(p.matrix, p.x, p.y + 1)) {
      p.y += 1;
      this.score += 1;
      return true;
    }
    this._lock();
    return false;
  }

  hardDrop() {
    if (this.paused || this.gameOver) return;
    const p = this.current;
    let dist = 0;
    while (!this._collides(p.matrix, p.x, p.y + 1)) {
      p.y += 1;
      dist += 1;
    }
    this.score += dist * 2;
    this._lock();
  }

  hold() {
    if (this.paused || this.gameOver || this.holdUsed) return;
    const currentType = this.current.type;
    if (this.holdType === null) {
      this.holdType = currentType;
      this.current = this._newPiece(this.nextType);
      this.nextType = this._takeFromBag();
    } else {
      const swap = this.holdType;
      this.holdType = currentType;
      this.current = this._newPiece(swap);
    }
    this.holdUsed = true;
    if (this._collides(this.current.matrix, this.current.x, this.current.y)) {
      this._gameOverNow();
    }
  }

  ghostY() {
    const p = this.current;
    let y = p.y;
    while (!this._collides(p.matrix, p.x, y + 1)) y += 1;
    return y;
  }

  _lock() {
    const p = this.current;
    const cells = shapeCells(p.matrix);
    for (const c of cells) {
      const gy = p.y + c.y;
      const gx = p.x + c.x;
      if (gy >= 0) this.grid[gy][gx] = p.type;
    }
    if (this.onLock) this.onLock();
    const cleared = this._clearLines();
    if (cleared > 0) this._applyScore(cleared);
    this.holdUsed = false;
    this.current = this._newPiece(this.nextType);
    this.nextType = this._takeFromBag();
    if (this._collides(this.current.matrix, this.current.x, this.current.y)) {
      this._gameOverNow();
    }
  }

  _clearLines() {
    let cleared = 0;
    for (let y = TOTAL_ROWS - 1; y >= 0; y--) {
      if (this.grid[y].every((cell) => cell !== null)) {
        this.grid.splice(y, 1);
        this.grid.unshift(new Array(COLS).fill(null));
        cleared += 1;
        y += 1; // re-check same index after shift
      }
    }
    if (cleared > 0 && this.onLinesCleared) this.onLinesCleared(cleared);
    return cleared;
  }

  _applyScore(cleared) {
    const table = { 1: 100, 2: 300, 3: 500, 4: 800 };
    this.score += (table[cleared] || 0) * this.level;
    this.lines += cleared;
    this.level = Math.floor(this.lines / 10) + 1;
  }

  _gameOverNow() {
    this.gameOver = true;
    if (this.onGameOver) this.onGameOver();
  }

  tick(dtMs) {
    if (this.paused || this.gameOver) return;
    this.dropAccumulator += dtMs;
    if (this.dropAccumulator >= this.dropIntervalMs) {
      this.dropAccumulator = 0;
      this.softDrop();
    }
  }
}
