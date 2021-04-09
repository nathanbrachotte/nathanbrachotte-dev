import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'

import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'
import { CardContainer } from '../../components/Card'
import Background from './Background'
import { InternalArticle } from '../../components/Article/Article'

import { Post } from '../../types'

const getBlogPostsFromData = (data: any): Post[] => {
  const {
    allContentfulBlogPost: { edges },
  } = data
  const res = edges.map(({ node }: { node: any }) => {
    console.log({ node })
    const post: Post = {
      id: node.id,
      body: node?.body?.body,
      description: node?.description?.description,
      createdAt: node?.createdAt,
      image: node?.heroImage?.file?.url,
      title: node?.title,
    }
    return post
  })
  return res
}

const Writing: React.FC = () => (
  <StaticQuery
    query={graphql`
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
              }
              description {
                description
              }
              heroImage {
                id
                file {
                  fileName
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const blogPosts = getBlogPostsFromData(data)

      return (
        <Section.Container id="blog-posts" Background={Background}>
          <Section.Header name="Blog" icon="✍️" label="notebook" />
          <CardContainer>
            {blogPosts.map((post) => {
              console.log({ post })

              return (
                <Fade bottom key="rest.id">
                  <InternalArticle
                    onClick={() =>
                      navigate(`/posts/`, { state: { blogPosts, id: post.id } })
                    }
                    time={3}
                    title={post.title}
                    image={post.image}
                    text={post.description}
                    date={post.createdAt}
                    key={post.id}
                  />
                </Fade>
              )
            })}
          </CardContainer>
        </Section.Container>
      )
    }}
  />
)

export default Writing
