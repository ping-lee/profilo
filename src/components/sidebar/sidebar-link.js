import { chakra, PropsOf, useColorModeValue } from "@chakra-ui/core"
import NextLink from "next/link"
import { useRouter } from "next/router"
import React from "react"

const StyledLink = React.forwardRef(function StyledLink(
  props,
  ref,
) {
  const { isActive, ...rest } = props

  return (
    <chakra.a
      aria-current={isActive ? "page" : undefined}
      width="100%"
      rounded="md"
      ref={ref}
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      transition="all 0.2s"
      _hover={{
        color: useColorModeValue("gray.900", "whiteAlpha.900"),
        transform: isActive ? undefined : "translateX(2px)",
      }}
      _activeLink={{
        bg: useColorModeValue("teal.100", "rgba(48, 140, 122, 0.3)"),
        color: useColorModeValue("gray.800", "teal.200"),
        fontWeight: "semibold",
      }}
      {...rest}
    />
  )
})


const SidebarLink = (props) => {
  const { href, icon, children, depth, ...rest } = props

  const { pathname } = useRouter()
  const isActive = pathname === href

  return (
    <chakra.div
      userSelect="none"
      ml={`${depth}em!important`}
      display="flex"
      alignItems="center"
      lineHeight="1.5rem"
      {...rest}
    >
      <NextLink href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </NextLink>
    </chakra.div>
  )
}

export default SidebarLink
