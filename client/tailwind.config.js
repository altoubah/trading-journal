/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0F',
          secondary: '#111116',
        },
        gold: {
          light: '#DAA520',    // Golden yellow
          DEFAULT: '#B8860B',  // Dark golden rod
          dark: '#8B7355',     // Dark golden
        },
        accent: {
          DEFAULT: '#B8860B',
          hover: '#DAA520',
          muted: '#8B7355',
        },
        panel: {
          DEFAULT: '#15151A',
          hover: '#1A1A20',
        },
      },
      boxShadow: {
        'gold': '0 0 15px rgba(184, 134, 11, 0.1)',
        'gold-lg': '0 0 30px rgba(184, 134, 11, 0.15)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #B8860B, #DAA520, #B8860B)',
      },
    },
  },
  plugins: [],
}