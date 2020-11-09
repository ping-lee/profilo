import { Box } from '@chakra-ui/core'
import ImageGallary from '@components/image-viewer/gallary'
import localImgages from '../contents/myphotos/*.jpg'
import Header from "@components/header"
import SEO from "@components/seo"
import Footer from "@components/footer"

const data = {
  isLoading: false,
  images: localImgages.map(x => {
    const info = x.toString().substr(21,x.toString().length-21).split('-')
    console.log(info)
    return {
      author: {
        avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        name: "lee-ping",
        url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
      },
      caption: "个人相册",
      color: "#14100F",
      createdAt: info[0],
      likes: 10,
      vmode:info[1],
      source: {
          //download: x,
          fullscreen: x,
          regular: x,
          thumbnail: x,
      },
      title: info[2],
    }
  })
}

function PhotosPage() {
  console.log(localImgages, 'localImgages')
  return (
    <>
      <SEO
        title="lee blog"
        description="hahaha"
      />
      <Header fixed="fixed"/>
      <Box pt={3} mt="4.5rem">
        <ImageGallary data={data} />
      </Box>
      <Footer />
    </>
  )
}

export default PhotosPage