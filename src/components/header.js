import {
  chakra,
  Flex,
  Box,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Avatar,
  Text,
} from "@chakra-ui/core"
import { SearchIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import React from "react"
import { FaMoon, FaSun, FaAlignLeft, FaBars } from "react-icons/fa"
import NavLink from "./header-nav-link"
import Lee from '../../public/lee-ping.jpg'

const HeaderContent = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex align="center">
        <NextLink href="/" passHref>
          <chakra.a display={{ base: "none", md: "none", xl: "block" }} aria-label="Chakra UI, Back to homepage">
            LP
          </chakra.a>
        </NextLink>
        <Box display={{ base: "block", xl: "none" }}>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            onClick={onOpen}
            icon={<FaBars />}
          />
        </Box>
        <HStack
          as="nav"
          spacing="4"
          ml="24px"
          display={{ base: "none", md: "flex" }}
        >
          <NavLink href="/blog">博客</NavLink>
          <NavLink href="/photo">图片</NavLink>
          <NavLink href="/about">关于</NavLink>
          <NavLink href="/contact">联系</NavLink>
        </HStack>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <HStack>
                  <Avatar size="md" mr="10px" name="lee ping" src={Lee} />{" "}
                  <Text>lee-ping</Text>
                </HStack>
              </DrawerHeader>
              <DrawerBody>
              <NavLink href="/blog">博客</NavLink>
              <NavLink href="/photo">图片</NavLink>
              <NavLink href="/about">关于</NavLink>
              <NavLink href="/contact">联系</NavLink>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>

      <Flex maxW="720px" align="center" color="gray.400">
        <IconButton
            size="md"
            ml="3"
            fontSize="lg"
            variant="ghost"
            color="current"
            icon={<SearchIcon />}
        />
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  )
}
const Header = (props) => {
  const hbg = useColorModeValue("hsl(204deg,67%,85%)", "#171923")
  return (
    <chakra.header
      pos={props.fixed=='fixed'?"fixed":"absolute"}
      top="0"
      zIndex="1"
      bg={hbg}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
  