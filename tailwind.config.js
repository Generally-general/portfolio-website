/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#22D3EE",
        background: "#1A1A2E",
        card: "#2E2E48",
      },
    },
  },
  plugins: [],
};
// In the above code, we extended the theme configuration to add custom font families and color palettes. We used the extend property to add new values to the theme configuration. We defined custom font families for the sans-serif font category and added custom colors for the primary, secondary, background, and card elements.