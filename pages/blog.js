import {
    Box, Grid,
    chakra,
    Divider,
    HStack,
    Stack,
    Icon,
    Text,
    useColorModeValue,
    useColorMode,
  } from '@chakra-ui/core'
import { MdArrowForward } from "react-icons/md"
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
      stroke: ${props => props.colorMode == 'dark' ? "hsl(333deg,100%,52%)" : "hsl(245deg, 100%, 60%)"};
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c2 {
      opacity: 0;
      transition: opacity 125ms ease 0s;
      stroke: ${props => props.colorMode == 'dark' ? "hsl(333deg,100%,52%)" : "hsl(245deg, 100%, 60%)"};
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  & .c3 {
      opacity: 0;
      transition: opacity 125ms ease 125ms;
      stroke: ${props => props.colorMode == 'dark' ? "hsl(333deg,100%,52%)" : "hsl(245deg, 100%, 60%)"};
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
  margin-top: 0!important;
  :hover {
    & .c1 {opacity: 1;transition: opacity 0s ease 125ms;}
    article {
      //
    }

    .c0-title {
      color: ${props => props.colorMode == 'dark' ? "hsl(333deg,100%,52%)" : "hsl(245deg,100%,60%)"};
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
const Preview = ({ post, colorMode }) => (
    <Link href={post.slug}>
      <PreviewLink colorMode={colorMode}>
        <Box display="block" mb="48px">
          <chakra.article cursor="pointer">
            <chakra.h4 className="c0-title" fontSize="24px" fontFamily="PingFangSC-Semibold">{post.title}</chakra.h4>
            <chakra.h6 fontSize="19px" color="hsl(225deg,15%,50%)">{post.subtitle}</chakra.h6>
            <chakra.p fontSize="18px" mt="16px">{post.excerpt}</chakra.p>
            <Box w="16px" h="16px" />
            <PreviewMore>
              <Box display="inline-flex" pos="relative" fontSize="18px" alignItems="center" fontFamily="PingFangSC-Semibold">更多</Box>
              <Box m="0px!important" w="8px" h="8px"></Box>
              <MoreSvg colorMode={colorMode}>
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
const CotagrayLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 13px;
  color:  ${props => props.colorMode == 'dark' ? "hsl(0deg,0%,100%)" : "hsl(225deg, 15%, 15%)"};
  padding: 3px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 400;
  word-break: keep-all;
  cursor: pointer;
  :hover {
    .hbkg {
      opacity: 0.5;
      transform: scale(1.06);
      transition-duration: 300ms;
    }
  }
`
const HoldBkgrd = styled.div`
  opacity: 0.33;
  transform: scale(0.99);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 8px;
  background-color: ${props => props.colorMode == 'dark' ? "hsl(200deg,50%,60%)" : "hsl(200deg, 75%, 65%)"};
  transform-origin: center center;

  
`
const Cotagray = ({tag, colorMode}) => (
  <CotagrayLink>
    <HoldBkgrd className="hbkg" />
    <Text color={colorMode == 'dark' ? "rgba(255,255,255,0.92)" : "hsl(225deg, 15%, 15%)"}>{tag}</Text>
  </CotagrayLink>
)
const PopuLink = styled.li`
  margin-bottom: 16px;
  margin-left: -30px;
  cursor: pointer;
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  :hover {
    .pop-c1 {
      transform: translateX(10px);
      transition-duration: 270ms;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
`
const PopSpan = styled.span`
  transform: translateX(0px);
  display: inline-block;
  padding-right: 16px;
  padding-top: 0px;
`
const PopContent = ({ pop, colorMode }) => (
  <PopuLink>
    <PopSpan className="pop-c1">
      <Icon as={MdArrowForward} color={colorMode == 'dark' ? "hsl(333deg,100%,52%)" : "hsl(245deg,100%,60%)"}/>
    </PopSpan>
    <Link href={pop.slug}>{pop.title}</Link>
  </PopuLink>
)

//import Cat from '../svgs/cat.svg'
import BgWave from '../contents/svgs/bg-wave.svg'

function BlogPage() {
  const { colorMode } = useColorMode()
  const hbg = useColorModeValue("hsl(204deg,67%,85%)", "#171923")
  const gtext = useColorModeValue("hsl(333deg,100%,45%)", "hsl(230deg,92%,63%)")
  let tags = ["SQL", "PL\SQL", "Oracle", "日记", "C++", "React", "NodeJS", ".NET", "英语"]
  return (
    <>
      <SEO
        title="lee blog"
        description="hahaha"
      />
      <Header fixed="fixed"/>
      <Stack position="relative" w="100%" mt="4.5rem">
        <Box w={{base: "100%", md: "100%", xl: "100%"}} h="100px" background={hbg}></Box>
        <BgWave style={{bottom: '0px', marginTop: "-1px", fill: hbg}} />
      </Stack>
      <Container>
        <Box pt={3} mt="4.5rem" mx="32px" maxW="1100px">
            <Grid templateColumns={{
              base: "1fr",
              xl: "2fr 1fr",
            }} gap="64px 96px">
              <Stack>
                <chakra.h3 mt="40px" fontSize="18px" fontFamily="PingFangSC-Semibold" color={gtext}>最近发布</chakra.h3>
                <Divider orientation="horizontal" mt="0!important" />
                <Box h="36px" w="36px" mt="0px!important"/>
                {postsPages.map((post, i) =><Preview key={i} post={post} colorMode={colorMode}/>)}
              </Stack>
              <Stack fontFamily="PingFangSC-Semibold">
                <Box mt="40px" >
                  <chakra.h3 fontSize="18px" color={gtext}>热门分类</chakra.h3>
                  <Divider orientation="horizontal" />
                  <Box mt="37px">
                    {tags.map((tag, i) => <Cotagray key={i} tag={tag} colorMode={colorMode} />)}
                  </Box>
                </Box>
                <Box mt="40px!important">
                  <chakra.h3 fontSize="18px" color={gtext}>最受欢迎的内容</chakra.h3>
                  <Divider orientation="horizontal" mt="0!important" />
                  <Box pt="32px">
                    <chakra.ul fontSize="19px" listStyleType="none">
                      {postsPages.map((pop, i) => <PopContent key={i} pop={pop} colorMode={colorMode} />)}
                    </chakra.ul>
                    
                  </Box>
                </Box>
              </Stack>
              
              
          </Grid>
        </Box>
        
      </Container>
      <Footer />
    </>
  )
}
  
export default BlogPage