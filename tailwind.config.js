/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{html,js,jsx}","./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    colors: {
      'white': '#FFF',
      'biscay': {  DEFAULT: '#1F2A68',  50: '#CACFEF',  100: '#BAC1EA',  200: '#9BA5E1',  300: '#7B89D8',  400: '#5C6DCE',  500: '#3C51C5',  600: '#3243A7',  700: '#283787',  800: '#1F2A68',  900: '#12193D',  950: '#0C1027'},
      
      'lemon-ar': {  DEFAULT: '#F1D00A',  50: '#FEF9DE',  100: '#FDF6CA',  200: '#FBEFA3',  300: '#FAE87C',  400: '#F8E155',  500: '#F6DA2D',  600: '#F1D00A',  700: '#BBA208',  800: '#857306',  900: '#4F4503',  950: '#342D02'},
      
      'red': {  DEFAULT: '#8E1616',  50: '#FADCDC',  100: '#F7CBCB',  200: '#F1A7A7',  300: '#EC8484',  400: '#E66161',  500: '#E13D3D',  600: '#D52121',  700: '#B11B1B',  800: '#8E1616',  900: '#5D0E0E',  950: '#450B0B'},
    }
  },
  plugins: [],
}

