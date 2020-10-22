import { ChakraProvider } from '@chakra-ui/core'
import theme from 'theme'
import siteConfig from 'configs/site-config'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
          </Head>
          <DefaultSeo {...siteConfig.seo} />
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </>
    )
}

export default MyApp