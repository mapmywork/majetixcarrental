/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#081A2D",
        secondary: "#135DFF",
        accent: "#F4B400",
        background: "#F8FAFC",
        dark: "#111827",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        button: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
