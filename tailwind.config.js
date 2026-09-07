/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            400: '#999999',
            600: '#666666',
            800: '#333333',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      spacing: {
        'xs': 'var(--portfolio-space-xs)',
        'sm': 'var(--portfolio-space-sm)',
        'md': 'var(--portfolio-space-md)',
        'lg': 'var(--portfolio-space-lg)',
        'xl': 'var(--portfolio-space-xl)',
      },
      borderRadius: {
        'sm': 'var(--portfolio-radius-sm)',
        'md': 'var(--portfolio-radius-md)',
        'lg': 'var(--portfolio-radius-lg)',
      }
    },
  },
  plugins: [],
}
