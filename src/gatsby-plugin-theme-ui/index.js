export default {
  breakpoints: [0, 768, 992],
  colors: {
    text: '#fff',
    textS: '#aaa',
    primary: '#f0f',
    background: 'rgba(17, 17, 17, 0.95)',
    backgroundS: 'rgba(51, 51, 51, 0.95)',
    header: 'rgba(0, 0, 0, 0.5)',
    modes: {
      green: { primary: '#0f0' },
      babyBlue: { primary: '#31afff' }
    }
  },
  fonts: {
    heading: 'Righteous, sans-serif',
    body: 'Open Sans, sans-serif'
  },
  fontSizes: ['1em', '1.2em', '1.5em', '1.8em', '2.5em', '3.5em'],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700
  },
  shadows: {
    darkBigShadow: '0 5px 5px #000',
    darkSmallShadow: '0 1px 1px #000',
    lightBigShadow: '0 5px 5px primary',
    lightSmallShadow: '0 1px 1px primary',
  },
  borders: {
    $darkBorder: '1px solid #555'
  }
}