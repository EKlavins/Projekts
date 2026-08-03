import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/**
 * Flat config. `eslint-config-next` v16 exports flat config arrays directly,
 * so there is no need to bridge through @eslint/eslintrc.
 */
const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default eslintConfig;
