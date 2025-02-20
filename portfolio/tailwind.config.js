/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],  
  theme: {
    extend: {
      screens: {
        '2xl': '1536px', // Only add or override what's necessary
      },
        animation: {
        'slide-up': 'slideUp 1s ease-in-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            visibility: 'visible',
          },
        },
      },
      colors: {
        underline: '#000', // Customize the underline color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.email-link': {
          position: 'relative',
          textDecoration: 'none',
          display: 'inline-block',
        },
        '.email-link::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: '#000',
          bottom: '-8px',
          left: '0',
          transform: 'scaleX(1)',
          transformOrigin: 'left',
          transition: 'transform 0.6s ease-in-out',
        },
        '.email-link:hover::before': {
          transform: 'scaleX(0)',
          transformOrigin: 'right',
        },
        '.external-link': {
          position: 'relative',
          textDecoration: 'none',
          display: 'inline-block',
        },
        '.external-link::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: '#000',
          bottom: '-2px',
          left: '0',
          transform: 'scaleX(1)',
          transformOrigin: 'left',
          transition: 'transform 0.6s ease-in-out',
        },
        '.external-link:hover::before': {
          transform: 'scaleX(0)',
          transformOrigin: 'right',
        },
        '.fade-in': {
          opacity: '1',
          transition: 'opacity 0.5s ease',
        },
        '.hidden-state': {
          opacity: '0',
          visibility: 'hidden',
        },
        '.hover-image': {
          transition: 'transform 0.5s ease-in-out',
        },
        '.hover-image:hover': {
          transform: 'translateY(-10px)',
        },
        '.rotate-90': {
          transform: 'rotate(90deg)', // Custom rotation utility
        },
        
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('flowbite/plugin'),
  ],
}
