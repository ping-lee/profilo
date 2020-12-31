import { Box } from '@chakra-ui/core'
import Header from "@components/header"
import SEO from "@components/seo"
import Footer from "@components/footer"

function PhotosPage({}) {
  return (
    <>
      <SEO
        title="lee blog"
        description="hahaha"
      />
      <Header fixed="fixed"/>
      <Box pt={3} mt="4.5rem">
        kkk
      </Box>
      <Footer />
    </>
  )
}

export async function getStaticProps () {

  return {
    props: {
    },
  }
}

export default PhotosPage