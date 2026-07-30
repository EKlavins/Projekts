// localStorage persistence for high score and settings.
const Storage = {
  KEY: "tetris-themes-save",

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return { best: 0, theme: "jungle" };
      const data = JSON.parse(raw);
      return { best: data.best || 0, theme: data.theme || "jungle" };
    } catch {
      return { best: 0, theme: "jungle" };
    }
  },

  save(partial) {
    const current = this.load();
    const next = { ...current, ...partial };
    try {
      localStorage.setItem(this.KEY, JSON.stringify(next));
    } catch {
      // storage unavailable (private mode); ignore
    }
    return next;
  },
};
