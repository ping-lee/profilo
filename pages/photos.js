import ImageViewer from '@components/image-viewer/viewer'
import ImageGallary from '@components/image-viewer/gallary'

import test from '../contents/photos/20201104084430.jpg'

const data = {
  isLoading: false,
  images: [
      {
          author: {
              avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              name: "Glen Carrie",
              url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
          },
          caption: "Male Lion ",
          color: "#14100F",
          createdAt: "2020-05-04T15:10:22-04:00",
          likes: 10,
          source: {
              download: test,
              fullscreen: test,
              regular: test,
              thumbnail: test,
          },
          title: "标题",
      },
      {
        author: {
            avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            name: "Glen Carrie",
            url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
        },
        caption: "Male Lion ",
        color: "#14100F",
        createdAt: "2020-05-04T15:10:22-04:00",
        likes: 10,
        source: {
            download: test,
            fullscreen: test,
            regular: test,
            thumbnail: test,
        },
        title: "标题",
    },
    {
      author: {
          avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          name: "Glen Carrie",
          url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
      },
      caption: "Male Lion ",
      color: "#14100F",
      createdAt: "2020-05-04T15:10:22-04:00",
      likes: 10,
      source: {
          download: test,
          fullscreen: test,
          regular: test,
          thumbnail: test,
      },
      title: "标题",
  },
  {
    author: {
        avator: "https://images.unsplash.com/profile-1576432292156-…&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
        name: "Glen Carrie",
        url: "https://unsplash.com/glencarrie?utm_source=react-images&utm_medium=referral"
    },
    caption: "Male Lion ",
    color: "#14100F",
    createdAt: "2020-05-04T15:10:22-04:00",
    likes: 10,
    source: {
        download: test,
        fullscreen: test,
        regular: test,
        thumbnail: test,
    },
    title: "标题",
},
      
      
  ],
}

function PhotosPage() {
  return (
    <>
      <ImageViewer data={data}/>
      <ImageGallary data={data} />
    </>
  )
}

export default PhotosPage