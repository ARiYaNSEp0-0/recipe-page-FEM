/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],
        serif: ['"Young Serif"', ...defaultTheme.fontFamily.serif],
      },
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
      spacing: {
        30: "123px",
        card: "738px",
      },
      colors: {
        stone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)",
        },
        brown: {
          800: "hsl(14, 45%, 36%)",
        },
        rose: {
          50: "hsl(330, 100%, 98%)",
          800: "hsl(332, 51%, 32%)",
        },
      },
      gridTemplateColumns: {
        listItem: "0fr 1fr",
        card: "1fr 82% 1fr",
      },
      content: {
        disc: "counter(_, disc)",
        decimal: "counter(ol_counter) '.'",
      },
      fontSize: {
        headingLevel2: "28px",
        headingLevel1Desktop: "40px",
      },
    },
  },
  plugins: [],
};
