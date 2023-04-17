import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1',
      light: '#ad9393',
      dark: '#312929'
    },
    secondary: {
      main: '#ba1a1a',
    },
    info: {
      main: '#36ab30',
    },
    background: {
      default: '#6bc466',
      paper: '#ddedf4',
    },
  },
  typography: {
    htmlFontSize: 14,
    button: {
      fontSize: 15,
    },
  },
})


const ThemeContextProvider = (props) => {
  const {
    children
  } = props

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeContextProvider