// Bootstraps the game, UI, input, main loop, and PWA service worker.
(function () {
  const game = new TetrisGame();
  const ui = new TetrisUI(game);

  game.paused = true;
  ui._showOverlay("Tetris", "Swipe or use the buttons to play", "Start");

  setupInput(game, () => {});

  document.getElementById("overlay-action").addEventListener("click", () => {
    if (game.gameOver || game.paused) {
      if (game.gameOver) ui.restart();
      else ui.togglePause();
    } else {
      ui._hideOverlay();
    }
    game.paused = false;
  });

  let lastTime = performance.now();
  function loop(now) {
    const dt = now - lastTime;
    lastTime = now;
    game.tick(dt);
    ui.render();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
