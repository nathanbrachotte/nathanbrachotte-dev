import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'

import Section from '../../components/Section'
import { CardContainer } from '../../components/Card'
import Background from './Background'
import { InternalArticle } from '../../components/Article/Article'

import { getBlogPostsFromData } from './getBlogPostsFromData'

const Fade = require('react-reveal/Fade')

const BlogPosts: React.FC = () => (
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
    `}
    render={(data) => {
      const blogPosts = getBlogPostsFromData(data)
      return (
        <Section.Container id="blog-posts" Background={Background}>
          <Section.Header name="Blog" icon="✍️" label="notebook" />
          <Fade right>
            <CardContainer>
              {blogPosts.map((post) => {
                return (
                  <InternalArticle
                    onClick={() =>
                      navigate(`blog/${post.slug}`, {
                        state: { blogPosts, id: post.id },
                      })
                    }
                    title={post.title}
                    image={post.image}
                    text={post.preview}
                    date={post.createdAt}
                    key={post.id}
                  />
                )
              })}
            </CardContainer>
          </Fade>
        </Section.Container>
      )
    }}
  />
)

export default BlogPosts
