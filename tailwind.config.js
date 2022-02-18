module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        screens: {
          print: { raw: 'print' },
        },
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Bazier Square',
          'Noto Sans KR',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        relax: '#74ebd5',
        'relax-white': '#fffbd5',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        circle: 'circle',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
