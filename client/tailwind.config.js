/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/bg.jpg')",
      },
      colors:{
        primary:"#BE123C",
        secondary:"rgb(252,165,165)",
        background_clr:"#eae8e9", 

        
      },
      
    },
  },
  plugins: [],
}
