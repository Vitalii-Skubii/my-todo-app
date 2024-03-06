import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import ToDoApp from './components/ToDoApp'
import theme from './styles/theme'

function App():JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <ToDoApp />
      </Container>
    </ThemeProvider>
  )
}

export default App