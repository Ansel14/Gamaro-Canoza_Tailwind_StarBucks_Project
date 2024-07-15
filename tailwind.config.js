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
        greenDark: "#1e3932",
        greenLight: "#d4e9e2",
        greenLightest: "#f1f8f5",
        gold: "#cba258",
        gray: "#f2f0eb",
      },
      backgroundImage: {
        banner: " url('../IMG/Rewards__IMG/hero-mobile_2021.jpg')",
      },
    },
  },
  plugins: [],
};
