// Theme definitions: piece colors (I,O,T,S,Z,J,L), UI accent, board grid line, background class.
const THEMES = {
  jungle: {
    label: "Jungle",
    emoji: "🌴",
    accent: "#4ade80",
    grid: "rgba(74, 222, 128, 0.15)",
    pieces: {
      I: "#34d399", O: "#facc15", T: "#a3e635", S: "#22c55e",
      Z: "#ef4444", J: "#166534", L: "#f59e0b",
    },
  },
  city: {
    label: "City",
    emoji: "🏙️",
    accent: "#60a5fa",
    grid: "rgba(148, 163, 184, 0.15)",
    pieces: {
      I: "#38bdf8", O: "#fbbf24", T: "#c084fc", S: "#34d399",
      Z: "#f87171", J: "#3b82f6", L: "#fb923c",
    },
  },
  space: {
    label: "Space",
    emoji: "🚀",
    accent: "#818cf8",
    grid: "rgba(129, 140, 248, 0.15)",
    pieces: {
      I: "#818cf8", O: "#facc15", T: "#e879f9", S: "#2dd4bf",
      Z: "#fb7185", J: "#6366f1", L: "#fdba74",
    },
  },
  ocean: {
    label: "Ocean",
    emoji: "🌊",
    accent: "#22d3ee",
    grid: "rgba(34, 211, 238, 0.15)",
    pieces: {
      I: "#22d3ee", O: "#fde047", T: "#67e8f9", S: "#2dd4bf",
      Z: "#fb7185", J: "#0ea5e9", L: "#fb923c",
    },
  },
  ice: {
    label: "Ice",
    emoji: "❄️",
    accent: "#bae6fd",
    grid: "rgba(186, 230, 253, 0.2)",
    pieces: {
      I: "#e0f2fe", O: "#fef9c3", T: "#bae6fd", S: "#a5f3fc",
      Z: "#fda4af", J: "#7dd3fc", L: "#fed7aa",
    },
  },
  neon: {
    label: "Neon",
    emoji: "🌃",
    accent: "#f472b6",
    grid: "rgba(244, 114, 182, 0.2)",
    pieces: {
      I: "#22d3ee", O: "#fde047", T: "#f472b6", S: "#4ade80",
      Z: "#fb7185", J: "#a78bfa", L: "#fb923c",
    },
  },
  desert: {
    label: "Desert",
    emoji: "🏜️",
    accent: "#f59e0b",
    grid: "rgba(245, 158, 11, 0.15)",
    pieces: {
      I: "#fbbf24", O: "#fde68a", T: "#f97316", S: "#a3a35a",
      Z: "#dc2626", J: "#92400e", L: "#f59e0b",
    },
  },
  candy: {
    label: "Candy",
    emoji: "🍬",
    accent: "#f9a8d4",
    grid: "rgba(249, 168, 212, 0.2)",
    pieces: {
      I: "#93c5fd", O: "#fde047", T: "#f9a8d4", S: "#86efac",
      Z: "#fca5a5", J: "#c4b5fd", L: "#fdba74",
    },
  },
};

const THEME_ORDER = ["jungle", "city", "space", "ocean", "ice", "neon", "desert", "candy"];
