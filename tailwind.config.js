const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.html", "./**/*.templ", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        primary: {
          50: "#f0f5f4",
          100: "#dcebe9",
          200: "#c8e0de",
          300: "#b4d6d3",
          400: "#a0cbc8",
          500: "#81b29a",
          600: "#739e89",
          700: "#658a78",
          800: "#577666",
          900: "#495f55",
        },
        secondary: {
          50: "#f9e8e6",
          100: "#f3d1ce",
          200: "#ecbab5",
          300: "#e6a39c",
          400: "#e08c84",
          500: "#e07a5f",
          600: "#ca6e57",
          700: "#b4624e",
          800: "#9e5645",
          900: "#884a3d",
        },
        newspaper: {
          50: "#FBFAF7",
          100: "#FAF9F5",
          200: "#F8F7F2",
          300: "#F7F6EF",
          400: "#F6F5EC",
          500: "#F6F5F0",
          600: "#E2E0D6",
          700: "#CECBBB",
          800: "#B9B6A1",
          900: "#A5A18A",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A2A2A8",
          500: "#6E6E76",
          600: "#52525A",
          700: "#3F3F45",
          800: "#2E2E33",
          900: "#1D1D20",
        },
        teal: {
          50: "#F4FFFD",
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
        indigo: {
          50: "#F8FBFF",
          100: "#EBF4FF",
          200: "#C3DAFE",
          300: "#A3BFFA",
          400: "#7F9CF5",
          500: "#667EEA",
          600: "#5A67D8",
          700: "#4C51BF",
          800: "#34399B",
          900: "#1E2156",
        },
        purple: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D8FD",
          300: "#D6BCFA",
          400: "#B794F4",
          500: "#9F7AEA",
          600: "#805AD5",
          700: "#6B46C1",
          800: "#553C9A",
          900: "#44337A",
        },
        pink: {
          50: "#FFF5F7",
          100: "#FFEBEF",
          200: "#FED7E2",
          300: "#FBB6CE",
          400: "#F687B3",
          500: "#ED64A6",
          600: "#D53F8C",
          700: "#B83280",
          800: "#97266D",
          900: "#702459",
        },
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)",
      },
      spacing: {
        128: "32rem",
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        creative: ['"Sacramento"', "serif"],
        default: ["Inter", "sans-serif"],
        "red-hat-display": ['"Red Hat Display"', "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.63rem", { lineHeight: "1.35" }],
        "3xl": ["2.63rem", { lineHeight: "1.24" }],
        "4xl": ["3.5rem", { lineHeight: "1.18" }],
        "5xl": ["4rem", { lineHeight: "1.16" }],
        "6xl": ["5.5rem", { lineHeight: "1.11" }],
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
        },
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
