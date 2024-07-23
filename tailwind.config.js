/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Rubik': [ "'Rubik'", 'sans-serif']
      },
      colors:{
        "gris-nav": "#333",
        "gris-texto": "#555",
        "naranja": "#e67e22",
        "naranja-hover":"#cf711f",
        "cafe": "#45260a"
        
      },
      backgroundColor:{
        "background-primera":"#fdf2e9",
        "backgrouund-tag-verde": "#51cf66",
        "background-naranja":"#eb984e"
      },
      animation:{
        'show-card-icon': 'showCardIcon 300ms linear'
      },
      keyframes:{
        showCardIcon:{
          'from':{ transform: 'translateY(-200%)'},
          'to': { transform: 'translateY(0%)'},
        },
      }
      
    }
  },
  variants:{
    animation:['responsive','hover','group-hover'],
    animate:['responsive','hover','group-hover'],
    fontSize:['responsive','hover','group-hover']
  },
  plugins: [],
}
