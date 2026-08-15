/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0906',
          900: '#110E09',
          850: '#16120B',
          800: '#1D1810',
          700: '#2A2318',
          600: '#3A3122',
        },
        // warm neutrals for text
        bone: '#F5F0E7',
        sand: '#A99D89',
        dim: '#6E6455',
        // brand accent (kept in the same family as the project covers)
        orange: {
          soft: '#F0764A',
          DEFAULT: '#E0542A',
          deep: '#BE3F1B',
        },
        // legacy tokens kept so nothing breaks
        paper: { DEFAULT: '#F3ECE3', 100: '#F8F2EA', 200: '#EBE1D4', 300: '#DCD0BF' },
        clay: '#8C8175',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        script: ['Sacramento', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(224, 84, 42, 0.55)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
