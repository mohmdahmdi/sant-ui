/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,svg}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./__deprecated__/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    black: "#000000",
    white: "#FFFFFF",
  },
  theme: {
    extend: {
      animation: {
        "scroll-x": "scroll-x 80s linear infinite",
        slide: "slide 0.5s",
      },
      borderRadius: {
        DEFAULT: "16px",
      },
      boxShadow: {
        e1: "0px 5px 20px rgba(0, 0, 0, 0.05)",
        e2: "0px 5px 20px 2px rgba(37, 51, 141, 0.1)",
        e3: "0px 3px 10px rgba(0, 0, 0, 0.15)",
        e4: "4px 4px 14px 2px rgba(157, 178, 206, 0.15)",
      },
      colors: {
        neutral: {
          50: "#dfdfdf",
          100: "#dbdbdb",
          200: "#cbcbcb",
          300: "#bcbcbc",
          400: "#a1a1a1",
          500: "#868686",
          600: "#6c6c6c",
          700: "#5f5f5f",
          800: "#535353",
          900: "#474747",
          1000: "#3b3b3b",
          1100: "##1b1b1b",
          11200: "#111111",
        },
        primary: {
          50: "#d9dce2",
          100: "#b3bac6",
          200: "#9ba3b3",
          300: "#848ea1",
          400: "#6d798e",
          500: "#57647d",
          600: "#42506b",
          700: "#2e3d5a",
          800: "#1b2a49",
          900: "#16233e",
          1000: "#111c34",
          1100: "#0f192f",
          11200: "#050a17",
        },
        secondary: {
          50: "#FFF7F5",
          100: "#FFE8E0",
          200: "#FFB8A3",
          300: "#FF825C",
          400: "#FF5F33",
          500: "#FC4819",
          600: "#E53B0B",
          700: "#C62E02",
          800: "#AA2600",
          900: "#8C2000",
          1000: "#741B00",
          1100: "#631700",
          11200: "#521300",
        },
        green: {
          500: "#219653",
          400: "#36D379",
          300: "#79E2A6",
          200: "#BCF0D2",
          100: "#E4F9ED",
        },
        red: {
          500: "#EB5757",
          400: "#F08181",
          300: "#F5ABAB",
          200: "#FAD5D5",
          100: "#FDEEEE",
        },
      },
      container: {
        center: true,
        screens: {
          "2xl": "1200px",
        },
      },
      fontSize: {
        body1: "1.143rem",
        body2: "1rem",
        body3: "0.857rem",
        body4: "0.714rem",
        title1: "1.857rem",
        title2: "1.571rem",
        title3: "1.286rem",
        title4: "1.428rem",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        // bold: 600,
        extrabold: 800,
      },
      height: {
        header: "68px",
        "header-sm": "60px",
      },
      minHeight: {
        main: "calc(100vh - 68px - 218px - 56px)",
      },
      keyframes: {
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slide: {
          "0%": { left: "-1000px", display: "none" },
          "100%": { left: "0px" },
        },
      },
      transitionProperty: {
        width: "width, background",
      },
      zIndex: {
        header: 1000,
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
