/**
 * Media for the work gallery. Kept separate from the dictionaries because a
 * file path and its intrinsic size are the same in every language — only the
 * captions are translated, keyed by the ids below.
 *
 * Frames were exported from the CAD/render clips supplied by 2XE.
 *
 * TODO(2XE): these are the four clearest frames from the videos provided.
 * Swap in higher-resolution stills — and ideally photographs of the finished,
 * installed parts, which sell the work far harder than a CAD viewport does.
 */
export const workMedia = [
  {
    id: "vent-insert",
    src: "/work/vent-insert.webp",
    width: 1100,
    height: 774,
  },
  {
    id: "duct-elbow",
    src: "/work/duct-elbow.webp",
    width: 1100,
    height: 668,
  },
  {
    id: "surface-model",
    src: "/work/surface-model.webp",
    width: 1100,
    height: 688,
  },
  {
    id: "cad-session",
    src: "/work/cad-session.webp",
    width: 1100,
    height: 688,
  },
] as const;

export type WorkId = (typeof workMedia)[number]["id"];
