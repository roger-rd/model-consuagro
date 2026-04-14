/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f2f7f2',
          100: '#e0eee0',
          200: '#c2ddc3',
          300: '#96c399',
          400: '#63a368',
          500: '#3e8344',
          600: '#2d6832',
          700: '#255329',
          800: '#1f4222',
          900: '#1a371d',
          950: '#0d1f10',
        },
        earth: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f4dba9',
          300: '#ecc270',
          400: '#e3a43d',
          500: '#d4872a',
          600: '#b96b20',
          700: '#97511c',
          800: '#7a411d',
          900: '#65371a',
        },
        sage: {
          100: '#eaf2eb',
          200: '#d0e6d2',
          300: '#a8cead',
          400: '#78b27e',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
