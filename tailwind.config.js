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
          blue: "#0070EE",
          "blue-dark": "#0056B3",
          "blue-light": "#EBF5FF",
          cyan: "#00C0FF",
          "cyan-light": "#E0F7FF",
          navy: "#0A192F",
          "navy-deep": "#060D1A",
          "navy-light": "#112240",
          slate: "#1E293B",
          gray: "#64748B",
          "light-gray": "#F8FAFC",
          border: "#E2E8F0",
          green: "#00E676",
          "green-dark": "#059669",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'premium': '0 10px 30px -10px rgba(0, 30, 80, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 35px -10px rgba(0, 112, 238, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'glow-blue': '0 0 25px -5px rgba(0, 112, 238, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
