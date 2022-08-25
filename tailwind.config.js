/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#22577A",
      secondary: "#38A3A5",
      tertiary: "#57CC99",
      complementary: "#80ED99",
      white: "#F0F5F9",
      gray: "#C9D6DF",
      grayDark: "#52616B",
      black: "#1E2022",
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
