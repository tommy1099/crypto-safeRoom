/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    blur: {
      custom: "5px",
      none: "0px",
    },
    extend: {
      colors: {
        gold: "#FFD700",

        patternColors: {
          green: "#5B6A6E",
          red: "#705253",
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("tailwindcss-flip")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ee8f50",

          secondary: "#fef3c7",

          accent: "#111827",

          neutral: "#374151",

          "base-100": "#f3f4f6",

          info: "#3b82f6",

          success: "#4d7c0f",

          warning: "#6366f1",

          error: "#ef4444",
        },
        dark: {
          primary: "#ee8f50",

          secondary: "#fef3c7",

          accent: "#111827",

          neutral: "#777",

          "base-100": "#212121",

          info: "#3b82f6",

          success: "#4d7c0f",

          warning: "#6366f1",

          error: "#ef4444",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: true, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
