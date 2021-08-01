export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "610615fff5c202d47d0c53d4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f2awdd45",
                  apiId: "9c5b1612-9e10-436f-bf6e-354918366455",
                },
                {
                  buildHookId: "610615ff234cb0d7dd818c95",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gnx4ywv1",
                  apiId: "590dac3d-da14-40b7-9b96-5b4cd9897157",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vtungn/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gnx4ywv1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
