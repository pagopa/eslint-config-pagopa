module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "import",
    "functional",
    "sonarjs"
  ],
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:functional/recommended",
    "plugin:sonarjs/recommended"
  ]
};
