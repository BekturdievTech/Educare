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
      fontFamily: {
        sans: ['var(--font-syne)'],
        outfit: ['var(--font-outfit)']
      },
      colors:{
        dark: "#131C1E",
        primary: "#B6EC3D",
        secondary: "#ffdc40",
        "neutral-grey": "#747474",        
        "neutral-grey-light": "#BCBCBC",
      }
    },
  },
  plugins: [],
};
