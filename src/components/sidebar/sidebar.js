import { Box, chakra, Icon, useColorModeValue } from "@chakra-ui/core"
import { useRouter } from "next/router"
import React, { useState, useRef, useEffect } from "react"
import { FaRegBookmark } from "react-icons/fa"
import SidebarCategory from "./sidebar-category"
import SidebarLink from "./sidebar-link"
import { useEventListener } from '@utils/use-event-listener'
import { useOnClickOutside } from '@utils/user-onclick-outside'
import { throttle } from 'lodash'

const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop
    el = el.offsetParent
  }
  return totalOffset
}

const Sidebar = ({ routes, headingSelector, getTitle, getDepth, }) => {
  //console.log(routes)
  //const { pathname } = useRouter()
  //const ref = (null)
  const { throttleTime = 200, tocTitle = `目录` } = { }
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState()
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.

    const selector =
      headingSelector || Array.from({ length: 6 }, (_, i) => `.content h` + (i + 1))
    const nodes = Array.from(document.querySelectorAll(selector))
    const titles = nodes.map(node => ({
      title: getTitle ? getTitle(node) : node.innerText,
      depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
    }))
    const minDepth = Math.min(...titles.map(h => h.depth))
    setHeadings({ titles, nodes, minDepth })
  }, [headingSelector, getTitle, getDepth])

  const scrollHandler = throttle(() => {
    const { titles, nodes } = headings
    // Offsets need to be recomputed because lazily-loaded
    // content increases offsets as user scrolls down.
    const offsets = nodes.map(el => accumulateOffsetTop(el))
    const activeIndex = offsets.findIndex(
      offset => offset > window.scrollY + 0.8 * window.innerHeight
    )
    setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
  }, throttleTime)
  useEventListener(`scroll`, scrollHandler)
  //console.log(headings,'headings')
  return (
    <Box
      ref={ref}
      as="aside"
      pos="sticky"
      top="9.6rem"
      pr="8"
      pl="3"
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      h="calc(((100vh - 1.5rem) - 64px) - 42px);"
      display={{ base: "none", md: "block" }}
    >
      {tocTitle && (
        <chakra.h4
          fontSize="sm"
          fontWeight="bold"
          m={0}
          textTransform="uppercase"
          letterSpacing="wider"
          color={useColorModeValue("gray.700", "inherit")}
        >
          <Icon as={FaRegBookmark} mr="1em" />
          {tocTitle}
        </chakra.h4>
      )}
      {
        headings.titles.map(({ title, depth }, index) => {
          return (
            <React.Fragment key={index}>
              <SidebarLink
                
                mt="2" 
                key={title}
                depth={depth - headings.minDepth}
                href={`#${title.replace("#", "")}`}
                onClick={event => {
                  event.preventDefault()
                  setOpen(false)
                  headings.nodes[index].scrollIntoView({
                    behavior: `smooth`,
                    block: `start`,
                  })
                }}
              >
                {title.replace("#", "")}
              </SidebarLink>
            </React.Fragment>
          )
        })
      }
      {/* <Search /> */}
      {/*{routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && (
              <chakra.h4
                fontSize="sm"
                fontWeight="bold"
                my="1.25rem"
                textTransform="uppercase"
                letterSpacing="wider"
                color={useColorModeValue("gray.700", "inherit")}
              >
                {c1.title}
              </chakra.h4>
            )}

            {c1.routes.map((c2) => {
              if (!c2.routes) {
                return (
                  <SidebarLink ml="-3" mt="2" key={c2.path} href={c2.path}>
                    {c2.title}
                  </SidebarLink>
                )
              }

              const selected = pathname.startsWith(c2.path)
              const opened = selected || c2.open

              return (
                <SidebarCategory
                  contentRef={ref}
                  key={c2.path}
                  {...c2}
                  selected={selected}
                  opened={opened}
                >
                  <Stack>
                    {c2.routes.map((c3) => (
                      <SidebarLink key={c3.path} href={c3.path}>
                        {c3.title}
                      </SidebarLink>
                    ))}
                  </Stack>
                </SidebarCategory>
              )
            })}
          </React.Fragment>
        )
      })}*/}
    </Box>
  )
}

export default Sidebar
