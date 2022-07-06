/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ja: [
          "游ゴシック体",
          "YuGothic",
          "游ゴシック",
          "Yu Gothic",
          "sans-serif",
        ],
        en: [
          "SF Pro Text",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: { shake: "shake 1s ease infinite" },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0)" },
          "16%": { transform: "rotate(12deg)" },
          "32%": { transform: "rotate(-10deg)" },
          "48%": { transform: "rotate(8deg)" },
          "64%": { transform: "rotate(-6deg)" },
          "80%": { transform: "rotate(4deg)" },
          "96%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
