/** @type {import('tailwindcss').Config} */
const tailwindBaseTheme = require("../../tailwind.base")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./build/src/**/*.{js,jsx,ts,tsx}"],
  theme: { ...tailwindBaseTheme.theme },
}
