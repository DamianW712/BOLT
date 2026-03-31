/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f5f3f0',
          100: '#ebe7e2',
          200: '#ddd5cc',
          300: '#cdb5a0',
          400: '#b8956a',
          500: '#a68271',
          600: '#9b7759',
          700: '#7d6249',
          800: '#6b5344',
          900: '#5a463a',
        },
        sage: {
          50: '#f5f7f4',
          100: '#eff3ed',
          200: '#d9e5d3',
          300: '#b8d4a8',
          400: '#8fbb7d',
          500: '#6b9e5b',
          600: '#5a8847',
          700: '#4a6f3a',
          800: '#3f5d32',
          900: '#344d2a',
        },
        warm: {
          50: '#fefdf8',
          100: '#f8f5f0',
          200: '#ede8e0',
          300: '#d9cfc3',
          400: '#c4b5a0',
          500: '#b8a591',
          600: '#a89580',
          700: '#97866f',
          800: '#7d7263',
          900: '#6b645a',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
