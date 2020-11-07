import { Box, chakra, Flex } from "@chakra-ui/core"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"
import Container from "@components/container"
import EditPageLink from "@components/edit-page-button"
import Footer from "@components/footer"
import Header from "@components/header"
import SEO from "@components/seo"
import * as React from "react"
import PageTransition from "@components/page-transition"

const PageContainer = ({
  frontmatter,
  children,
  sidebar,
  pagination,
}) => {
  const { title, subtitle, description, editUrl } = frontmatter

  return (
    <>
      <SEO title={title} description={description} />
      <Header fixed="absolute"/>
      <Container>
        <Flex>
          
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={4} px={5} mt="4.5rem" mx="auto" minH="80vh" maxW={["360px", "700px", "800px", "70%"]}>
              <PageTransition>
                <chakra.h1 
                  apply="mdx.h1" 
                  fontSize="38px"
                  textAlign={{base: "left", md: "center", xl: "center"}} 
                  mt="0"
                  fontFamily="PingFangSC-Semibold"
                >{title}</chakra.h1>
                <chakra.h2 
                  apply="mdx.h2" 
                  textAlign={{base: "left", md: "center", xl: "center"}} 
                  mt="16px" 
                  fontSize="24px"
                  color="hsl(225deg,15%,50%)"
                >{subtitle}</chakra.h2>
                {children}
              </PageTransition>
              <Box mt="40px">{editUrl && <EditPageLink href={editUrl} />}</Box>
              {pagination || null}
            </Box>
          </div>
          {sidebar || null}
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

export default PageContainer
