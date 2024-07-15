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
        black: "#161616",
      },
      backgroundImage: {
        banner: " url('../IMG/Rewards__IMG/hero-mobile_2021.jpg')",
        prize: "url('../IMG/Rewards__IMG/844262945b2a8b8cfb29.png')",
        banner2: "url('../IMG/Rewards__IMG/xl-hero-desktop_2021.png')",
      },
      backgroundSize: {
        "100%": "100%",
        "60%": "60%",
      },
    },
  },
  plugins: [],
};
