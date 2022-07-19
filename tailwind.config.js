/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing:{
      tight: '-.015'
    },
    extend: {
      
        height : {
          'half-screen' : '50vh',

        }
      },
    },
 
  plugins: [],
}
