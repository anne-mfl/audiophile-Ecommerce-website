/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop': "url('assets/home/desktop/image-header.jpg')",
        'tablet-desktop': "url('assets/home/tablet/image-header.jpg')",
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'primary': '#D87D4A',
        'primaryLight': '#FBAF85',
        'grey': '#F1F1F1',
        'greyLight': '#FAFAFA',
        'almostBlack': '#101010',
        'blackLight': '#0E0E0E',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      fontSize: {
        '13': '13px',
        '15': '15px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '56': '56px',
      },
      height: {
        '25': '100px',
        '140': '560px',
        '180': '720px',
      },
      letterSpacing: {
        'm0.2': '-0.2px',
        '1': '1px',
        '1.3': '1.3px',
        '1.5': '1.5px',
        '1.7': '1.7px',
        '2': '2px',
        '10': '10px',
      },
      lineHeight: {
        '6.25': '25px',
        '11': '44px',
        '14.5': '58px',
      },
      margin: {
        '8.5': '34px',
        '15': '60px',
        '22': '88px',
        '30': '120px',
        '41': '164px',
      },
      padding: {
        '19': '76px',
        '41': '164px',
      },
      spacing: {
        '13': '52px',
        '18': '72px',
        '19': '76px',
        '22': '88px',
        '26': '104px',
        '37': '148px',
        '46': '184px',
        '68': '272px',
        '76': '304px'
      },
      width: {
        '25': '100px',
        '88': '352px',
        '135': '540px',
      },
    },
  },
  plugins: [],
}

