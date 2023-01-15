/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#EBEDE6",
        darkGreen: "#D7DCC8",
        text: "#000000",
        offwhite: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
