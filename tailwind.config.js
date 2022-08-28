/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#283149",
      secondary: "#404B69",
      tertiary: "#F73859",
      complementary: "#DBEDF3",
      white: "#FFFFFF",
      gray: "#C9D6DF",
      grayDark: "#52616B",
      black: "#1E2022",
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        chakra: ['"Chakra Petch"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
