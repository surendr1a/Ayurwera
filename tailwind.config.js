// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(270deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF, #A26BFF)',
      },
      animation: {
        'gradient-animation': 'gradientBackground 8s ease infinite',
        'scroll': 'scroll 160s linear infinite', // Modify scroll duration for smoother effect
      },
      keyframes: {
        gradientBackground: {
          '0%, 100%': { backgroundPosition: '0% 20%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scroll: { // Modify scroll keyframes for seamless transition
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1000%)' }, // Adjusted to scroll half of the doubled content width
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      textShadow: {
        glow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Include the text-shadow plugin
  ],
}
