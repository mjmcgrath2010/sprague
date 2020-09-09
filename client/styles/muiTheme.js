import { createMuiTheme } from '@material-ui/core/styles'
import theme from './styledTheme'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.primaryLight,
      main: theme.primary,
      dark: theme.primaryDark,
      contrastText: theme.white,
    },
    secondary: {
      light: theme.secondaryLight,
      main: theme.secondary,
      dark: theme.secondaryDark,
      contrastText: theme.white,
    },
    error: {
      light: theme.errorLight,
      main: theme.error,
      dark: theme.errorDark,
      contrastText: theme.white,
    },
    warning: {
      light: theme.warningLight,
      main: theme.warning,
      dark: theme.warningDark,
      contrastText: theme.black,
    },
    info: {
      light: theme.infoLight,
      main: theme.info,
      dark: theme.infoDark,
      contrastText: theme.white,
    },
    success: {
      light: theme.successLight,
      main: theme.success,
      dark: theme.successDark,
      contrastText: theme.white,
    },
  },
  typography: {
    fontFamily: [theme.primaryFont, 'sans-serif'].join(','),
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
