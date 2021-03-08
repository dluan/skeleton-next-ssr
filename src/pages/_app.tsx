import { ChakraProvider } from '@chakra-ui/react';
import {AppProps} from 'next/app'
import guiaTheme from '../styles/theme';
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ChakraProvider theme={guiaTheme}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ChakraProvider>
  )
}

export default MyApp
