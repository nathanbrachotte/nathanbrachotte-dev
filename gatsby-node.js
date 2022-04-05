const path = require('path')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)

  const result = await graphql(`
    query BlogPostQuery {
      allContentfulBlogPost {
        edges {
          node {
            id
            tags
            title
            createdAt
            body {
              body
              childMarkdownRemark {
                htmlAst
              }
            }
            preview {
              preview
            }
            heroImage {
              id
              file {
                fileName
                url
              }
            }
            video {
              video
            }
            dev
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: edge.node,
    })
  })

  const projectTemplate = path.resolve(`src/templates/project.tsx`)

  const projects = await graphql(`
    query ProjectsQuery {
      contentfulAbout {
        projects {
          id
          slug
          name
          description
          projectUrl
          repositoryUrl
          playStoreUrl
          appleStoreUrl
          publishedDate(formatString: "YYYY")
          type
          content {
            content
          }
          tool
          logo {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
          headerImage {
            file {
              url
            }
          }
          workDone
        }
      }
    }
  `)

  projects.data.contentfulAbout.projects.forEach((edge) => {
    createPage({
      path: `project/${edge.slug}`,
      component: projectTemplate,
      context: edge,
    })
  })
}
