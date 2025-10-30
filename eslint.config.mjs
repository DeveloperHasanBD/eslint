import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules", "build", "dist"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },

    rules: {
      /* ✅ Base JavaScript rules */
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error",

      /* ✅ React specific rules */
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

      /* ✅ Import rules */
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-extraneous-dependencies": "off",

      /* ✅ Accessibility rules */
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "off",

      /* ✅ React Hooks rules */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* ✅ Style preferences */
      quotes: ["error", "single"],
      semi: ["error", "always"],
      indent: ["error", 2],
    },
  },
];
