/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D1117',
        panel: '#11161D',
        edge: '#21262D',
        fog: '#8B949E',
        snow: '#E6EDF3',
        cyan: '#00D9FF',
        violet: '#7C3AED',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
