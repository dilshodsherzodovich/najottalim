/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D44B5",
        bgColor: "#D8EDF7",
        bgColorSecondary: "#E2F0FF",
        textBlack: "#292731",
        bgBlue: "#5D5FEF",
        // textGrey: "#A098AE",
        accentBlue: "#4C70FF",
        warning: "#C41F28",
        success: "#4CBC9A",
        textColor: "#303972",
        textGrey: "#455360",
        lightGrey: "#A098AE;",
        babyBlue: "#66BCE8",
        bgGrey: "#EAEAEA",
        iconColor: "#667085",
        price: "#FCC43E",
        status: "#FB7D5B",
        lightColor: "#C1BBEB",
        textRed: "#C11030",
        textLightBlue: "#5C63A3",
        priceSecondary: "#1128FA",
      },
    },
  },
  plugins: [],
};
