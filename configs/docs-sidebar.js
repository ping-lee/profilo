const sidebar = {
    routes: [
      {
        title: "Documentation",
        heading: true,
        routes: [
          {
            title: "Getting Started",
            path: "/docs/getting-started",
            heading: true,
            routes: [
              {
                title: "Upgrade to v1",
                path: "/docs/migration",
                heading: true,
                routes:[
                  {
                    title: "Design Principles",
                    path: "/docs/principles",
                  },
                ]
              },
              
            ]
          },
          {
            title: "Upgrade to v1",
            path: "/docs/migration",
          },
          {
            title: "Design Principles",
            path: "/docs/principles",
          },
          {
            title: "Comparison",
            path: "/docs/comparison",
          },
        ],
      },
    ],
  }
  
  export default sidebar
  