import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@angular-eslint": angular,
      "@typescript-eslint": tseslint,
    },
    rules: {
      // puedes añadir reglas aquí si quieres
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplate,
    },
    rules: {
      // reglas para plantillas HTML
    },
  },
  {
    ignores: ["src/index.html"],
  },
];
