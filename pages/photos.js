//import ImageViewer from '@components/image-viewer/viewer'
import { Box } from '@chakra-ui/core'
import ImageGallary from '@components/image-viewer/gallary'
import localImgages from '../contents/photos/*.jpg'
import Header from "@components/header"
import SEO from "@components/seo"

const data = {
  isLoading: false,
  images: localImgages.map(x => {
    return {
      author: {
        avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        name: "李平",
        url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
      },
      caption: "个人相册",
      color: "#14100F",
      createdAt: "2020-05-04T15:10:22-04:00",
      likes: 10,
      source: {
          download: x,
          fullscreen: x,
          regular: x,
          thumbnail: x,
      },
      title: "标题",
    }
  })
}


function PhotosPage() {
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
    </>
  )
}

export default PhotosPage