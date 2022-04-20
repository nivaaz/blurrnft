import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import './app.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp