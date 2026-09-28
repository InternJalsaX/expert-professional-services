/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#DDD0C8',
          'beige-light': '#F5F1EE',
          'beige-dark': '#C5B5AA',
          dark: '#323232',
          'dark-soft': '#424242',
          'dark-subtle': '#222222',
          neutral: '#FAF8F5',
          surface: '#FFFFFF',
          border: '#E7E2DC',
          accent: '#262626',
          gold: '#B99450',
          'gold-subtle': '#F8F4EA',
          emerald: '#15803D',
          'emerald-light': '#DCFCE7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'card': '0 4px 14px 0 rgba(50, 50, 50, 0.05)',
        'modal': '0 20px 40px -15px rgba(50, 50, 50, 0.15)',
        'float': '0 10px 30px -10px rgba(50, 50, 50, 0.12)',
      }
    },
  },
  plugins: [],
}
