import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
    },
    extends: ["js/recommended"],
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 👇 Custom override AFTER the react plugin config
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]);
