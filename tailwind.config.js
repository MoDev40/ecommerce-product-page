/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grayish-blue": "var(--Light-grayish-blue)",
        "very-dark-blue": "var(--Very-dark-blue)",
        "dark-grayish-blue": "var(--Dark-grayish-blue)",
        "grayish-blue": "var(--Grayish-blue)",
        "white-color": "var(--White-color)",
        "primary-orange": "var(--Orange)",
        "primary-pale-orange": "var(--Pale-orange)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
