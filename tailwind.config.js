/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      colors: {
        teal: {
          50:  "#E8F4F1",
          100: "#C8E6DF",
          200: "#90CABF",
          400: "#4A9E8E",
          600: "#2A7A6B",
          800: "#1A5248",
          900: "#0D3530",
        },
      },
    },
  },
  plugins: [],
};
