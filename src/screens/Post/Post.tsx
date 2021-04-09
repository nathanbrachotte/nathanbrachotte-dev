import React from 'react'
import { PageProps } from 'gatsby'
import { Image, Text, Flex, Box } from 'rebass/styled-components'

import Section from '../../components/Section'
import Background from './Background'
import { Post } from '../../types'

const PostPage: React.FC<PageProps> = ({ location, path, ...rest }) => {
  console.log({ location, path, rest })

  // @ts-expect-error location type is unknown
  const blogPosts = location?.state?.blogPosts as Post[]
  // @ts-expect-error location type is unknown
  const postId = location?.state?.id as string

  const currentPost = blogPosts.find((post) => post.id === postId)
  console.log({ blogPosts, currentPost, postId })

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const createdAt = new Date('2020-10-13T15:51:52.796Z')
  const createdAt2 = dateTimeFormat.format(createdAt)

  return (
    <Section.Container
      id={currentPost?.title || 'error'}
      Background={Background}>
      <div
        style={{
          flex: 1,
          maxWidth: '60%',
          justifySelf: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Image
          // className={heroStyles.heroImage}
          // alt={post.title}
          // fluid={post.heroImage.fluid}
          src={currentPost?.image}
        />
        <h1 className="section-headline">{currentPost?.description}</h1>
        <p
          style={{
            display: 'block',
          }}>
          {createdAt2}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: currentPost?.description,
          }}
        />
      </div>
    </Section.Container>
  )
}

export default PostPage
