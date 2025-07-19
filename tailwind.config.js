/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'terminal-green': '#00ff00',
        'terminal-dark': '#001100',
        'terminal-glow': '#00ff0055',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 0.15s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.95' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};