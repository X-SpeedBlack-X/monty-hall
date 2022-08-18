/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#5c7e32",
          500: "#7aa944",
        },
        gray: {
          300: "#555",
        },
        background: {
          100: "#444",
        },
      },
    },
  },
  plugins: [],
};
