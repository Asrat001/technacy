  
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: "rgb(240,241,255)",
      primaryBody:"rgb(254,255,254)",
      primaryText:"rgb(36,70,72)",
      primaryTextBody:"rgb(199,153,111)"
    },
    gridTemplateColumns:{
      "4":'repeat(4, 1fr)',
      "1":'repeat(1, auto)',
      "3":"repeat(3, 1fr)"
    }
    ,
    backgroundImage:{
      'bg':'url("./src/assets/bg.png")'
    },
    keyframes:{
        scroll:{
          '0%':{transform:'translate(0)'},
          '100%':{transform:'translate(calc(-250px*9)'}
        }
    },
    animation:{
      'scroll-x':'scroll 40s linear infinite'
    },
    
  },
  plugins: [],
}
