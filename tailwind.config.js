/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"urbanist","Open Sans"', "sans-serif"],
      },
      colors: {
        "blue-dark": "#010A17",
        yellow: "#FDCA40",
      },
    },
  },
  plugins: [],
};
