import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

const muiTheme = createMuiTheme({
  palette: {
    primary: colors.blue,
    secondary: colors.orange,
    error: colors.red,
    warning: colors.yellow,
    info: colors.blue,
    success: colors.green,
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
