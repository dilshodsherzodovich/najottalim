/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D44B5",
        bgColor: "#D8EDF7",
        bgColorSecondary: "#E2F0FF",
        black: "#000000",
        accentBlue: "#4C70FF",
        warning: "#C41F28",
        success: "#4CBC9A",
        textColor: "#303972",
        textGrey: "#455360",
        lightGrey: "#455360",
        babyBlue: "#66BCE8",
        bgGrey: "#EAEAEA",
        price: "#FCC43E",
        status: "#FB7D5B",
      },
    },
  },
  plugins: [],
};
