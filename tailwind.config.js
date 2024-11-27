/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Centers the container by default
        padding: {
          DEFAULT: '1rem',    // Default padding for all containers
          sm: '4rem',         // Padding for small screens (sm)
          md: '3rem',         // Padding for medium screens (md)
          lg: '2rem',         // Padding for large screens (lg)
          xl: '1rem',         // Padding for extra-large screens (xl)
        },
      },
      screens: {
        'sm': '640px',    // Default small breakpoint
        'md': '375px',    // Custom md breakpoint
        'lg': '1024px',   // Default large breakpoint
        'xl': '1440px',   // Default extra-large breakpoint
    },
    fontSize:{
      'xl':  '18px'
    },
  colors: {
    gray: {
      'very-dark': 'hsl(0, 0%, 17%)',
      'dark': 'hsl(0, 0%, 59%)',
    },
  },
  },
  plugins: [],
}

}