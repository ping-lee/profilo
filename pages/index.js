import {
  Box, Grid,
  chakra
} from '@chakra-ui/core'
import { StarIcon } from '@chakra-ui/icons'
import SEO from "@components/seo"
import Header from "@components/header"
import Footer from "@components/footer"
import Link from 'next/link'
import Container from "@components/container"
import {frontMatter as postsPages} from './posts/tech/*.mdx'
postsPages.reverse()

function HomePage() {
  return (
    <>
      <SEO
        title="lee blog"
        description="hahaha"
      />
      <Header fixed={false}/>
      <Container>
        <Box pt={3} mt="4.5rem" mx="32px" maxW="1100px">
            
        </Box>
      </Container>
      <Footer />
    </>
  )
}
  
export default HomePage