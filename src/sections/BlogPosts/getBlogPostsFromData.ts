import { __DEV__ } from '../../constants'
import { BlogPost } from '../../types'

export const getBlogPostsFromData = (data: any): BlogPost[] => {
  const posts: BlogPost[] = data.allContentfulBlogPost.edges.map(
    ({ node }: { node: any }) => {
      const post: BlogPost = {
        id: node.id,
        body: node?.body?.body,
        bodyAst: node?.body?.childMarkdownRemark?.htmlAst,
        preview: node?.preview?.preview,
        createdAt: node?.createdAt,
        image: node?.heroImage?.file?.url,
        title: node?.title,
        tags: node?.tags,
        video: node?.video?.video,
        showInDevOnly: node?.dev,
        slug: node?.slug,
      }

      return post
    },
  )

  const prodPost = posts.filter((post) => {
    return __DEV__ || !post.showInDevOnly
  })

  return prodPost
}
