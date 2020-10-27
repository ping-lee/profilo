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
  const { title, description, editUrl } = frontmatter

  return (
    <>
      <SEO title={title} description={description} />
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <Header />
      <Container>
        <Flex>
          
          <div style={{ flex: 1 }}>
            <SkipNavContent />
            <Box pt={3} px={5} mt="4.5rem" mx="auto" minH="80vh" maxW={["355px", "700px", "800px", "70%"]}>
              <PageTransition>
                <chakra.h1 apply="mdx.h1">{title}</chakra.h1>
                {children}
              </PageTransition>
              <Box mt="40px">{editUrl && <EditPageLink href={editUrl} />}</Box>
              {pagination || null}
            </Box>
            <Footer />
          </div>
          {sidebar || null}
        </Flex>
      </Container>
    </>
  )
}

export default PageContainer
