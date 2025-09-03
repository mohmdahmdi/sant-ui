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
          50: "#F8F8F8",
          100: "#F1F1F1",
          200: "#DFDFDF",
          300: "#C9C9C9",
          400: "#AEAEAE",
          500: "#878787",
          600: "#727272",
          700: "#626262",
          800: "#4B4B4B",
          900: "#3D3D3D",
          1000: "#2A2A2A",
          1100: "#1C1C1C",
          11200: "#121212",
        },
        primary: {
          50: "#F8FAFD",
          100: "#ECF2FA",
          200: "#D5E0F4",
          300: "#B9CAED",
          400: "#97AEE4",
          500: "#6684D7",
          600: "#4D6CD0",
          700: "#3B58CC",
          800: "#2C40A7",
          900: "#25338D",
          1000: "#1B2266",
          1100: "#111842",
          11200: "#0B1029",
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
