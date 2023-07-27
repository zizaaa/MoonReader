/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'brown':'rgb(135,80,45)'
      },
      textColor:{
        'gray':'rgb(198,172,150)'
      },
      screens:{
        'smallScreen':'391px',
        'mobileSmall':'320px',
        'mobileMedium':'375px',
        'mobileLarge':'810px',
        'tablet':'873px',
        'laptopMedium':'1024px',
        'laptopLarge':'1440px'
      }
    },
  },
  plugins: [],
}

