import { createTheme } from '@mui/material/styles'
import './fonts.css'

const FONT_PRIMARY = 'Ubuntu, sans-serif'

const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
    },
    secondary: {
      light: '#84A9FF',
      main: '#3366FF',
      dark: '#1939B7',
    },
    success: {
      light: '#86E8AB',
      main: '#36B37E',
      dark: '#1B806A',
    },
    error: {
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
    },
    warning: {
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
    },
  },
  typography: {
    fontFamily: FONT_PRIMARY
  },
})

export default theme
