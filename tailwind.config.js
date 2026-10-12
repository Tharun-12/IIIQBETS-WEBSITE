/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#071A2B',
          DEFAULT: '#0B2942',
          light: '#1261A0',
        },
        blue: {
          bright: '#1D8FE1',
          DEFAULT: '#1261A0',
        },
        cyan: {
          DEFAULT: '#35C2E6',
        },
        offwhite: '#F6F8FA',
        lightgray: '#EEF2F5',
        darktext: '#17202A',
        graytext: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.125rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section-heading': ['clamp(1.75rem, 3.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
