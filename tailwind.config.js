/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D44B5",
        bgColor: "#D8EDF7",
        bgColorSecondary: "#E2F0FF",
        warning: "#C41F28",
        success: "#4CBC9A",
        textColor: "#303972",
        price: "#FCC43E",
        status: "#FB7D5B",
      },
    },
  },
  plugins: [],
};
