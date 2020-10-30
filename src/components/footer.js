import React from "react"
import { Box, Icon, Text, Stack, Link, useColorModeValue } from "@chakra-ui/core"
import { FaGithub, FaQq } from "react-icons/fa"
import { SiWechat } from "react-icons/si"
import { GrMail } from "react-icons/gr"

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/ping-lee",
  },
  {
    icon: FaQq,
    label: "qq",
    href: "http://wpa.qq.com/msgrd?v=3&uin=1179320194&site=qq&menu=yes",
  },
  {
    icon: SiWechat,
    label: "wechat",
    href: "https://u.wechat.com/ELF_GII1Ci-5vxthMKbxTbc",
  },
  {
    icon: GrMail,
    label: "Gmail",
    href: "mailto:muzilideli@gmail.com",
  },
]
export const Footer = () => {
  const hbg = useColorModeValue("hsl(204deg,67%,85%)", "#171923")
  return (
    <Box as="footer" mt={12} textAlign="center" bg={hbg} padding="32px" >
      <Text fontSize="md">
        <span>2020 - lee ping</span>
      </Text>
      <Stack mt={4} direction="row" spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Box>
  )
}

export default Footer
