/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "Helvetica Neue",
      },
      colors: {
        offWhite: "#f9f9f9",
        greenPrimary: "#006241",
        greenAccent: "#00754a",
        greenDark: "#cba258",
        greenLight: "#d4e9e2",
        gold: "#cba258",
      },
    },
  },
  plugins: [],
};
