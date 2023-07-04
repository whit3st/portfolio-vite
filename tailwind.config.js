/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "background": "url('./bg2.png')",
        "new": "url('./new.jpg')",
      },
      keyframes: {
        scroll: {
          '0%': { opacity:1,top: '5px' },
          '70%': { opacity:1,top: '35px' },
          '100%': { opacity:.5,top: '5px' },
        },
        animation: {
          scroll: 'scroll 2s linear infinite',
        }
      }
    },
  },
  plugins: [],
}