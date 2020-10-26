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
  
  const Preview = ({ post }) => (
    <Link href={post.slug}>
      <a>
        <Box display="block" mt="48px">
          <chakra.article>
            <chakra.h4 fontSize="22px">{post.title}</chakra.h4>
            <chakra.h6 fontSize="17px">{post.subtitle}</chakra.h6>
            <chakra.p fontSize="16px" mt="16px">{post.excerpt}</chakra.p>
            <Box w="16px" h="16px" />
            <Box display="inline-flex" pos="relative" fontSize="16px" alignItems="center">更多</Box>
          </chakra.article>
        </Box>
      </a>
    </Link>
  )
  
  function BlogPage() {
    return (
      <>
        <SEO
          title="lee blog"
          description="hahaha"
        />
        <Header/>
        <Container>
          <Box pt={3} mt="4.5rem" mx="32px" maxW="1100px">
              <Grid templateColumns={{
                base: "1fr",
                xl: "2fr 1fr",
              }} gap="64px 96px">
                <Box>
                  {postsPages.map((post, i) =><Preview key={i} post={post} />)}
                </Box>
                <Box mt="48px" border="1px solid red">标签分类</Box>
            </Grid>
          </Box>
          <Footer />
        </Container>
      </>
    )
  }
    
  export default BlogPage