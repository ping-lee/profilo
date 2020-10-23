import React from "react"
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/core"
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { DiGithubBadge } from "react-icons/di"


const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: DiGithubBadge,
    label: "GitHub",
    href: "https://github.com/segunadebayo",
  },
  {
    icon: IoLogoTwitter,
    label: "Twitter",
    href: "https://twitter.com/thesegunadebayo",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/thesegunadebayo/",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:sage@adebayosegun.com",
  },
]
export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">
      <span>2020 - lee ping</span>
    </Text>
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
)

export default Footer
