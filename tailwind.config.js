/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "port-bg-base": "#cb8c8f",
        "port-yellow-dark": "#ea9a38",
        "port-yellow-light": "#fee3ce",
        "port-yellow-ultra-light": "#fff6ee",
        "port-yellow-ultra-dark": "#6d3035",
        "port-pink-base": "#f67473",
        "port-pink-dark": "#8a5453",
      },
      fontSize: {
        clamp: "clamp(1rem, 4vw, 2rem)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "repeat-itself": "marquee 10s linear infinite",
      },
      fontFamily: {
        notosans: ["Noto Sans"],
        special: ["Special"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
      boxShadow: {
        "img-shadow": "0 0 8px 8px #fee3ce inset"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
