/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instiper: {
          green: '#008B45',
          darkgreen: '#006400',
          forest: '#0A5C36',
          lightgreen: '#E8F5E9',
          gold: '#FFD700',
          golddark: '#C89600',
          red: '#D32F2F',
          redlight: '#FFEBEE',
          bg: '#F8FAF9',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          dark: '#1E293B',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 100, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 32px -4px rgba(0, 139, 69, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.4)',
        'green-glow': '0 0 20px rgba(0, 139, 69, 0.35)',
      }
    },
  },
  plugins: [],
}
