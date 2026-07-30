// Canvas rendering, HUD, menu, and theme wiring. No game rules live here.
class TetrisUI {
  constructor(game) {
    this.game = game;
    this.boardCanvas = document.getElementById("board-canvas");
    this.boardCtx = this.boardCanvas.getContext("2d");
    this.holdCtx = document.getElementById("hold-canvas").getContext("2d");
    this.nextCtx = document.getElementById("next-canvas").getContext("2d");

    this.scoreEl = document.getElementById("score");
    this.bestEl = document.getElementById("best");
    this.levelEl = document.getElementById("level");
    this.linesEl = document.getElementById("lines");

    this.overlay = document.getElementById("overlay");
    this.overlayTitle = document.getElementById("overlay-title");
    this.overlaySub = document.getElementById("overlay-sub");
    this.overlayAction = document.getElementById("overlay-action");

    this.menu = document.getElementById("menu");
    this.themeGrid = document.getElementById("theme-grid");

    const saved = Storage.load();
    this.theme = THEMES[saved.theme] ? saved.theme : "jungle";
    this.best = saved.best;

    this._buildThemeGrid();
    this.applyTheme(this.theme);
    this._resizeCanvas();
    window.addEventListener("resize", () => this._resizeCanvas());

    document.getElementById("btn-menu").addEventListener("click", () => this.openMenu());
    document.getElementById("menu-close").addEventListener("click", () => this.closeMenu());
    document.getElementById("btn-pause").addEventListener("click", () => this.togglePause());

    this.game.onGameOver = () => this._showGameOver();
    this.game.onLinesCleared = () => this._syncHud();
  }

  _resizeCanvas() {
    const wrap = this.boardCanvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const cssW = wrap.clientWidth;
    const cssH = wrap.clientHeight;
    this.boardCanvas.width = cssW * dpr;
    this.boardCanvas.height = cssH * dpr;
    this.boardCanvas.style.width = cssW + "px";
    this.boardCanvas.style.height = cssH + "px";
    this.cellSize = Math.floor(Math.min(cssW / COLS, cssH / VISIBLE_ROWS));
  }

  _buildThemeGrid() {
    this.themeGrid.innerHTML = "";
    for (const key of THEME_ORDER) {
      const t = THEMES[key];
      const btn = document.createElement("button");
      btn.className = "theme-tile";
      btn.dataset.theme = key;
      btn.innerHTML = `<span class="theme-emoji">${t.emoji}</span><span>${t.label}</span>`;
      btn.addEventListener("click", () => {
        this.applyTheme(key);
        this.closeMenu();
      });
      this.themeGrid.appendChild(btn);
    }
  }

  applyTheme(key) {
    this.theme = key;
    const app = document.getElementById("app");
    app.className = `theme-${key}`;
    for (const child of this.themeGrid.children) {
      child.classList.toggle("selected", child.dataset.theme === key);
    }
    Storage.save({ theme: key });
  }

  openMenu() {
    this.menu.classList.remove("hidden");
  }

  closeMenu() {
    this.menu.classList.add("hidden");
  }

  togglePause() {
    if (this.game.gameOver) return;
    this.game.paused = !this.game.paused;
    if (this.game.paused) {
      this._showOverlay("Paused", "", "Resume");
    } else {
      this._hideOverlay();
    }
  }

  _showGameOver() {
    const isNewBest = this.game.score > this.best;
    if (isNewBest) {
      this.best = this.game.score;
      Storage.save({ best: this.best });
    }
    this._showOverlay(
      "Game Over",
      isNewBest ? "New best score!" : `Score: ${this.game.score}`,
      "Play Again"
    );
  }

  _showOverlay(title, sub, actionLabel) {
    this.overlayTitle.textContent = title;
    this.overlaySub.textContent = sub;
    this.overlayAction.textContent = actionLabel;
    this.overlay.classList.remove("hidden");
  }

  _hideOverlay() {
    this.overlay.classList.add("hidden");
  }

  restart() {
    this.game.reset();
    this._hideOverlay();
    this._syncHud();
  }

  _syncHud() {
    this.scoreEl.textContent = this.game.score;
    this.bestEl.textContent = Math.max(this.best, this.game.score);
    this.levelEl.textContent = this.game.level;
    this.linesEl.textContent = this.game.lines;
  }

  _drawCell(ctx, px, py, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(px, py, size, size);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = Math.max(1, size * 0.06);
    ctx.strokeRect(px + 1, py + 1, size - 2, size - 2);
  }

  _drawMini(ctx, type) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (!type) return;
    const palette = THEMES[this.theme].pieces;
    const matrix = PIECE_SHAPES[type];
    const n = matrix.length;
    const size = Math.floor(ctx.canvas.width / (n + 1));
    const offset = (ctx.canvas.width - size * n) / 2;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (matrix[y][x]) {
          this._drawCell(ctx, offset + x * size, offset + y * size, size, palette[type]);
        }
      }
    }
  }

  render() {
    const ctx = this.boardCtx;
    const dpr = window.devicePixelRatio || 1;
    const cs = this.cellSize * dpr;
    const palette = THEMES[this.theme].pieces;
    const grid = THEMES[this.theme].grid;

    ctx.clearRect(0, 0, this.boardCanvas.width, this.boardCanvas.height);

    // grid lines
    ctx.strokeStyle = grid;
    ctx.lineWidth = 1;
    for (let x = 0; x <= COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cs, 0);
      ctx.lineTo(x * cs, VISIBLE_ROWS * cs);
      ctx.stroke();
    }
    for (let y = 0; y <= VISIBLE_ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cs);
      ctx.lineTo(COLS * cs, y * cs);
      ctx.stroke();
    }

    // locked cells
    for (let y = HIDDEN_ROWS; y < TOTAL_ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const cell = this.game.grid[y][x];
        if (cell) {
          this._drawCell(ctx, x * cs, (y - HIDDEN_ROWS) * cs, cs, palette[cell]);
        }
      }
    }

    if (!this.game.gameOver) {
      // ghost piece
      const ghostY = this.game.ghostY();
      const p = this.game.current;
      ctx.globalAlpha = 0.25;
      for (let y = 0; y < p.matrix.length; y++) {
        for (let x = 0; x < p.matrix.length; x++) {
          if (p.matrix[y][x]) {
            const gy = ghostY + y - HIDDEN_ROWS;
            if (gy >= 0) this._drawCell(ctx, (p.x + x) * cs, gy * cs, cs, palette[p.type]);
          }
        }
      }
      ctx.globalAlpha = 1;

      // active piece
      for (let y = 0; y < p.matrix.length; y++) {
        for (let x = 0; x < p.matrix.length; x++) {
          if (p.matrix[y][x]) {
            const py = p.y + y - HIDDEN_ROWS;
            if (py >= 0) this._drawCell(ctx, (p.x + x) * cs, py * cs, cs, palette[p.type]);
          }
        }
      }
    }

    this._drawMini(this.holdCtx, this.game.holdType);
    this._drawMini(this.nextCtx, this.game.nextType);
    this._syncHud();
  }
}
