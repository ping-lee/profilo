import { ChakraProvider } from '@chakra-ui/core'
import theme from 'theme'
import siteConfig from 'configs/site-config'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import FontFace from "@components/font-face"

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
            <meta name="theme-color" content="#319795" />
          </Head>
          <DefaultSeo {...siteConfig.seo} />
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
          <FontFace />
        </>
    )
}

export default MyApp