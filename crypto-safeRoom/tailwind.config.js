/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    blur: {
      custom: "1px",
    },
    extend: {
      colors: {
        patternColors: {
          green: "#5B6A6E",
          red: "#705253",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
