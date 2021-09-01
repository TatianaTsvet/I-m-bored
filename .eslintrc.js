module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["babel", "react", "prettier", "@typescript-eslint"],
  rules: {
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-named-as-default": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "off",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": 0,
  },
};
