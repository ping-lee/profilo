import {
  Box,
} from '@chakra-ui/core'
import SEO from "@components/seo"
import Header from "@components/header"
import Fotter from "@components/fotter"
function HomePage() {
  return (
    <>
      <SEO
        title="Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
        description="Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System"
      />
      <Header/>
      <Box mb={20}>
        <Box as="section" pt="12rem" pb="6rem">
        </Box>
        <Fotter />
      </Box>
    </>
  )
}
  
export default HomePage