import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { files: ["**/*.astro"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // Set the ECMAScript version
        sourceType: "module", // Use ECMAScript modules
      },
      globals: globals.browser,
    },
    rules: {
      // Enforce consistent indentation
      indent: ["error", 2],

      // Enforce the use of single quotes
      quotes: ["error", "double"],

      // Require semicolons at the end of statements
      semi: ["error", "always"],

      // Disallow unused variables
      "no-unused-vars": ["warn"],

      // Enforce the consistent use of trailing commas
      "comma-dangle": ["error", "always-multiline"],

      // Enforce the use of === and !== instead of == and !=
      eqeqeq: ["error", "always"],
    },
  },
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
