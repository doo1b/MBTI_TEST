/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#FF8080",
        myOrange: "#FFCF96",
        myYellow: "#F6FDC3",
        myGreen: "#CDFAD5",
      },
    },
  },
  plugins: [],
};
