/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    colors: {
      primary: "#005F94",
      secondary: "#fdb913",
      neutral50: "#F7F8F9",
      neutral100: "#E7EAEE",
      neutral200: "#D0D5DD",
      neutral300: "#B8C0CC",
      neutral400: "#A0ABBB",
      neutral500: "#64748B",
      neutral600: "#4B5768",
      neutral700: "#323A46",
      neutral800: "#191D23",
      neutral900: "#0D0F11",
      primary50: "#edf9ff",
      primary100: "#b7e5ff",
      primary200: "#80d2ff",
      primary300: "#14A1F0",
      primary400: "#0082ca",
      primary500: "#005F94",
      primary600: "#00456b",
      primary700: "#003552",
      primary800: "#002a42",
      primary900: "#002031",
      secondary50: "#fff8e7",
      secondary100: "#fff1d0",
      secondary200: "#fee7ac",
      secondary300: "#fed97d",
      secondary400: "#fece5a",
      secondary500: "#fdb913",
      secondary600: "#eaa602",
      secondary700: "#b48002",
      secondary800: "#7e5a01",
      secondary900: "#31290e",
      success50: "#ECFDF5",
      success100: "#D1FAE5",
      success200: "#A7F3D0",
      success300: "#6EE7B7",
      success400: "#34D399",
      success500: "#10B981",
      success600: "#059669",
      success700: "#047857",
      success800: "#065F46",
      success900: "#064E3B",
      warning50: "#FFFBEB",
      warning100: "#FEF3C7",
      warning200: "#FDE68A",
      warning300: "#FCD34D",
      warning400: "#FBBF24",
      warning500: "#F59E0B",
      warning600: "#D97706",
      warning700: "#B45309",
      warning800: "#92400E",
      warning900: "#78350F",
      error50: "#FEF2F2",
      error100: "#FEE2E2",
      error200: "#FECACA",
      error300: "#FCA5A5",
      error400: "#F87171",
      error500: "#EF4444",
      error600: "#DC2626",
      error700: "#B91C1C",
      error800: "#991B1B",
      error900: "#7F1D1D",
      white: "#FFFFFF",
      black: "#000000",
      transparent: colors.transparent,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["serif"],
      brand: ["Quantify"],
    },
    extend: {
      translate: ["last"],
    },
  },
}
