/** @type {import('tailwindcss').Config} */
export default {
  content:  [ "./src/**/*.{js,jsx,ts,tsx}"
    ,"./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [ require('flowbite/plugin')],
}
