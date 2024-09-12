/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        // => @media (min-width: 0px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        myPink1: "#FF9494",
        myPink2: "#FFD1D1",
        myPink3: "#FFE3E1",
        myBeige: "#FFF5E4",
      },
      fontFamily: {
        logy100: "logy-100",
        logy200: "logy-200",
        logy300: "logy-300",
        logy400: "logy-400",
        logy500: "logy-500",
        logy600: "logy-600",
        logy700: "logy-700",
        logy800: "logy-800",
        logy900: "logy-900",
      },
    },
  },
  plugins: [],
};
