const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    // in the content prop you should put all the files
    // that are using tailwindcss classes, for example:
    // content: ["./src/**/*.js", "./public/index.html"],
    // or
    // content: ["./src/**/*.vue", "./public/index.html"],
    // or
    // content: ["./src/**/*.jsx", "./public/index.html"],
    content: [],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      ...colors,
      "current": "current",
      "transparent": "transparent",
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("@tailwindcss/forms")],
};
