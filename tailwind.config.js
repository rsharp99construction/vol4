/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { black:"#0b0d12", white:"#ffffff", green:"#8bd129" } },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","Segoe UI","Roboto","sans-serif"] }
    },
  },
  plugins: [],
};
