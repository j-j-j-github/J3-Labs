/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appleWhite: '#f5f5f7',
        appleBlack: '#1d1d1f',
      },
      letterSpacing: {
        tighter: '-0.05em',
      }
    },
  },
  plugins: [],
}