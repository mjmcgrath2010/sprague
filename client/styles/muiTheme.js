import { createMuiTheme } from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '#000051',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#80e8dd',
      main: '#4bb5ab',
      dark: '#00857c',
      contrastText: '#FFF',
    },
    error: {
      light: '#ff616f',
      main: '#ff1744',
      dark: '#c4001d',
      contrastText: '#FFF',
    },
    warning: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000',
    },
    info: {
      light: '#5e92f3',
      main: '#1565c0',
      dark: '#003c8f',
      contrastText: '#FFF',
    },
    success: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
})

export default muiTheme
