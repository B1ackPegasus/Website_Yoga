/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-20":"#F1CDAC",
        "orange-25":"#CCAE93",
        "orange-brown":"#422E27",
        "dark-orange-brown":"#5B0204",
        "orange-10":"#F3E9E6",
        "main-color":"#534745",
        "main-color-hover":"#453b39",
        "beige":"#E5D7D4",
        "beige-50":"rgba(229,215,212,0.85)",
      },

      fontFamily:{
        dmsans : ["DM Sans","sans-serif"],
        montserrat: ["Montserrat","sans-serif"],
      },
      backgroundImage:{
        bigYoga:"url('./assets/images/lightText.png')",
        smallerYoga:"url('./assets/images/puppYoga-dark.png')",
        theSmallestYoga:"url('./assets/images/puppYoga-small.png') ",
        bgGradient:"linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 61%, rgba(243,232,229,1) 100%)",
      },
    },
    screens:{
      xs:"480px",
      sm:"760px",
      md:"1060px",
    }
  },
  plugins: [],
}