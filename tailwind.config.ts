import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgb(14,12,35)",
        "light-blue": "rgba(154,173,203,0.3)"
      },
      keyframes: {
        'bg-gradient-cycle': {
          '0%, 55%': {
            opacity: '0'
          },
          '11%, 33%': {
            opacity: '1'
          },
        },
        'text-gradient-cycle': {
          '0%, 55%': {
            filter: 'brightness(0) invert(1)'
          },
          '11%, 33%': {
            filter: "none"
          },
        }
      },
      animation: {
        'bg-gradient-cycle': 'bg-gradient-cycle 10s ease-in-out infinite',
        'text-gradient-cycle': 'text-gradient-cycle 10s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
