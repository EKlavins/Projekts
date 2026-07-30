// Touch gestures, on-screen buttons, and keyboard controls.
const SWIPE_THRESHOLD_PX = 24;
const SWIPE_DOWN_HARD_PX = 90;

function setupInput(game, onAction) {
  const boardEl = document.getElementById("board-canvas");

  const bind = (id, handler) => {
    const el = document.getElementById(id);
    el.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
    el.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        handler();
      },
      { passive: false }
    );
  };

  bind("btn-left", () => { game.moveLeft(); onAction(); });
  bind("btn-right", () => { game.moveRight(); onAction(); });
  bind("btn-down", () => { game.softDrop(); onAction(); });
  bind("btn-rotate", () => { game.rotate(); onAction(); });
  bind("btn-drop", () => { game.hardDrop(); onAction(); });
  bind("btn-hold", () => { game.hold(); onAction(); });

  // Swipe gestures directly on the board.
  let startX = 0;
  let startY = 0;
  let lastMoveX = 0;
  let tracking = false;

  boardEl.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      lastMoveX = t.clientX;
      tracking = true;
    },
    { passive: true }
  );

  boardEl.addEventListener(
    "touchmove",
    (e) => {
      if (!tracking) return;
      const t = e.touches[0];
      const dx = t.clientX - lastMoveX;
      if (Math.abs(dx) >= SWIPE_THRESHOLD_PX) {
        if (dx > 0) game.moveRight();
        else game.moveLeft();
        lastMoveX = t.clientX;
        onAction();
      }
    },
    { passive: true }
  );

  boardEl.addEventListener(
    "touchend",
    (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (dy > SWIPE_DOWN_HARD_PX && absDy > absDx) {
        game.hardDrop();
        onAction();
      } else if (absDx < SWIPE_THRESHOLD_PX && absDy < SWIPE_THRESHOLD_PX) {
        game.rotate();
        onAction();
      }
    },
    { passive: true }
  );

  // Keyboard (desktop testing / external keyboard on iPad).
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        game.moveLeft();
        break;
      case "ArrowRight":
        game.moveRight();
        break;
      case "ArrowDown":
        game.softDrop();
        break;
      case "ArrowUp":
        game.rotate();
        break;
      case " ":
        e.preventDefault();
        game.hardDrop();
        break;
      case "Shift":
      case "c":
      case "C":
        game.hold();
        break;
      default:
        return;
    }
    onAction();
  });
}
