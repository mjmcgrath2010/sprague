import { createMuiTheme } from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      light: '#ff3948',
      main: '#ba000d',
      dark: '#800008',
      contrastText: '#FFF',
    },
    warning: {
      light: '#dcea6d',
      main: '#f8dc1b',
      dark: '#b6a441',
      contrastText: '#FFF',
    },
    info: {
      light: '#6778e2',
      main: '#2e3e9e',
      dark: '#1a2363',
      contrastText: '#FFF',
    },
    success: {
      light: '#9ae267',
      main: '#4d931b',
      dark: '#396f11',
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
