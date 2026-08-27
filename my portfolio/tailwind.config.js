/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EF',
        ink: '#121417',
        muted: '#5A6270',
        navy: '#0B1F3A',
        cobalt: '#1D4ED8',
        line: '#E4E0D8',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 40px rgba(11, 31, 58, 0.08)',
        lift: '0 18px 50px rgba(11, 31, 58, 0.12)',
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
