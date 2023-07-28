/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "button":"#6528F7",
        "primary":"#4B56D2",
        //for links
        "secondary":"#45b7ff",
        "secondary-hover":"#c593fb"
      },
      height:{
        "90vh":"90vh"
      }
    },
  },
  plugins: [],
}

