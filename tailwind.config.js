/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#005f94",
      "primary-dark": "#003c5a",
      "primary-light": "#eff4ff",
      secondary: "#fdb913",
      "secondary-dark": "#c08902",
      "secondary-light": "#fee7af",
      grey: "#8492a6",
      "grey-dark": "#273444",
      "grey-light": "#d3dce6",
      success: "#039855",
      "success-light": "#e8fdf0",
      warning: "#f79009",
      "warning-light": "#fffaeb",
      danger: "#ec5453",
      "danger-light": "#ffebeb",
      white: "#ffffff",
      black: "#000000",
      transparent: colors.transparent,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      translate: ["last"],
    },
  },
}
