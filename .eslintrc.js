module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/no-reserved-component-names": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
