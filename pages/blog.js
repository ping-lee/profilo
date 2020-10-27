import {
    Box, Grid,
    chakra,
    Divider,
    Stack,
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
        <Box display="block" mb="48px">
          <chakra.article>
            <chakra.h4 fontSize="24px" fontFamily="PingFangSC-Semibold" color="hsl(245deg,100%,60%)">{post.title}</chakra.h4>
            <chakra.h6 fontSize="19px" color="hsl(225deg,15%,50%)">{post.subtitle}</chakra.h6>
            <chakra.p fontSize="18px" mt="16px">{post.excerpt}</chakra.p>
            <Box w="16px" h="16px" />
            <Box display="inline-flex" pos="relative" fontSize="18px" alignItems="center" fontFamily="PingFangSC-Semibold">更多</Box>
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
                <Stack>
                  <chakra.h3 mt="40px" fontSize="18px" color="hsl(333deg,100%,45%)">最近发布</chakra.h3>
                  {postsPages.map((post, i) =><Preview key={i} post={post} />)}
                </Stack>
                <Box mt="40px" display={{ base: "none", xl: "block" }}>
                <chakra.h3 fontSize="18px" color="hsl(333deg,100%,45%)">热门分类</chakra.h3>
                  <Divider orientation="horizontal" />
                  <Box>2</Box>
                </Box>
                
            </Grid>
          </Box>
          <Footer />
        </Container>
      </>
    )
  }
    
  export default BlogPage