import {
    Box, Grid,
    chakra,
    Divider,
    HStack,
    Stack,
  } from '@chakra-ui/core'
import { StarIcon } from '@chakra-ui/icons'
import SEO from "@components/seo"
import Header from "@components/header"
import Footer from "@components/footer"
import Link from 'next/link'
import Container from "@components/container"
import styled from 'styled-components'
import {frontMatter as postsPages} from './posts/tech/*.mdx'
postsPages.reverse()
  
const MoreSvg = styled.svg`
  width: 36px;
  height: 12px;
  fill: none;
  margin-left: 0px!important;
  & .c1 {
      opacity: 0;
      transition: opacity 125ms ease 0s;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c2 {
      opacity: 0;
      transition: opacity 125ms ease 0s;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c3 {
      opacity: 0;
      transition: opacity 125ms ease 125ms;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-opacity: 0.66;
  }
  & .c4 {
      opacity: 0;
      transition: opacity 125ms ease 250ms;
      stroke: hsl(245deg, 100%, 60%);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-opacity: 0.35;
  }
`
const PreviewLink = styled.a`
  :hover {
    & .c1 {opacity: 1;transition: opacity 0s ease 125ms;}
    article {
      //
    }
  }

  @media only screen and (max-width: 768px) {
    & .c1 {opacity: 1;transition: opacity 0s ease 125ms;}
    & .c2 {opacity: 1;transition: opacity 0s ease 0s;}
    & .c3 {opacity: 1;transition: opacity 0s ease 125ms;}
    & .c4 {opacity: 1;transition: opacity 0s ease 250ms;}
  }
`

const PreviewMore = styled(HStack)`
  :hover {
    & .c1 {opacity: 1;transition: opacity 0s ease 125ms;}
    & .c2 {opacity: 1;transition: opacity 0s ease 0s;}
    & .c3 {opacity: 1;transition: opacity 0s ease 125ms;}
    & .c4 {opacity: 1;transition: opacity 0s ease 250ms;}
  }
`


  const Preview = ({ post }) => (
    <Link href={post.slug}>
      <PreviewLink>
        <Box display="block" mb="48px">
          <chakra.article cursor="pointer">
            <chakra.h4 fontSize="24px" fontFamily="PingFangSC-Semibold" color="hsl(245deg,100%,60%)">{post.title}</chakra.h4>
            <chakra.h6 fontSize="19px" color="hsl(225deg,15%,50%)">{post.subtitle}</chakra.h6>
            <chakra.p fontSize="18px" mt="16px">{post.excerpt}</chakra.p>
            <Box w="16px" h="16px" />
            <PreviewMore>
              <Box display="inline-flex" pos="relative" fontSize="18px" alignItems="center" fontFamily="PingFangSC-Semibold">更多</Box>
              <Box m="0px!important" w="8px" h="8px"></Box>
              <MoreSvg>
                <path className="c1" d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"></path>
                <path className="c2" d="M15 10L19.5 5.5L15 1"></path>
                <path className="c3" d="M23 10L27.5 5.5L23 1"></path>
                <path className="c4" d="M31 10L35.5 5.5L31 1"></path>
              </MoreSvg>
            </PreviewMore >
          </chakra.article>
        </Box>
      </PreviewLink>
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