/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    colors: {
      'blu-ar': {  DEFAULT: '#21325E',  50: '#C6D0EB',  100: '#B7C4E6',  200: '#99ABDB',  300: '#7B92D0',  400: '#5C7AC6',  500: '#4162B9',  600: '#36529A',  700: '#2C427C',  800: '#21325E',  900: '#121C34',  950: '#0B1120'},
      'lemon-ar': {  DEFAULT: '#F1D00A',  50: '#FEF9DE',  100: '#FDF6CA',  200: '#FBEFA3',  300: '#FAE87C',  400: '#F8E155',  500: '#F6DA2D',  600: '#F1D00A',  700: '#BBA208',  800: '#857306',  900: '#4F4503',  950: '#342D02'},
    }
  },
  plugins: [],
}

