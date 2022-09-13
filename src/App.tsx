import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Home from './Home'

const config = {
  initialColorMode: 'Dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}

export default App
