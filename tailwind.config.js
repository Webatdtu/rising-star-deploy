/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },  // Slide from left
          '100%': { transform: 'translateX(0)' },    // End at position
        },
      },
    },
  },
  plugins: [],
}

