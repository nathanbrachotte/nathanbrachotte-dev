import React from 'react'
import { PageProps } from 'gatsby'
import {
  Card as CardRebass,
  Image,
  Text,
  Flex,
  Box,
  Heading,
} from 'rebass/styled-components'

import RehypeReact from 'rehype-react'
import styled from 'styled-components'
import Section from '../../components/Section'
import Background from './Background'
import { Post } from '../../types'
import { Badge } from '../../shared/Badge'
import VideoBox from '../../components/VideoBox'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props: any) => (
      <Heading
        fontSize={[3, 4, 5]}
        mt={[3, 3]}
        mb={[2, 3]}
        color="textDark"
        {...props}
      />
    ),
    h2: (props: any) => (
      <Heading
        fontSize={[2, 3, 4]}
        mt={[3, 3]}
        mb={[2, 3]}
        color="text"
        {...props}
      />
    ),
    p: (props: any) => (
      <Text
        fontSize={[1, 2, 3]}
        color="textLight"
        // color={['secondaryDark', 'primary', 'textDark']}
        {...props}
      />
    ),
    // FIXME: some real styling for code should be added
    code: (props: any) => (
      <Text
        fontSize={[1, 2, 3]}
        color="red"
        // color={['secondaryDark', 'primary', 'textDark']}
        {...props}
      />
    ),
  },
}).Compiler

const Spacer = styled.div<{ height: string }>`
  height: ${(props) => props.height || '40px'};
`
const PostPage: React.FC<PageProps> = ({ location, path, ...rest }) => {
  // @ts-expect-error location type is unknown
  const blogPosts = location?.state?.blogPosts as Post[]
  // @ts-expect-error location type is unknown
  const postId = location?.state?.id as string

  const currentPost = blogPosts && blogPosts.find((post) => post.id === postId)

  if (!currentPost) {
    return null
  }

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const createdAt = new Date('2020-10-13T15:51:52.796Z')
  const createdAt2 = dateTimeFormat.format(createdAt)

  const AssetComponent = currentPost?.video ? (
    <>
      <VideoBox video={currentPost.video} title={currentPost.title} />
      <Spacer height="10px" />
    </>
  ) : (
    currentPost?.image && (
      <>
        <Image alt={currentPost?.title} sx={{}} src={currentPost?.image} />
        <Spacer height="10px" />
      </>
    )
  )

  return (
    <Section.Container
      id={currentPost?.title || 'error'}
      Background={Background}>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width={[0.95, 0.8, 0.7]}>
          <Heading fontSize={[5, 6, 7]} color="textDark">
            {currentPost?.title}
          </Heading>
          <Spacer height="30px" />
          {AssetComponent}
          {currentPost?.tags?.map((text) => (
            <Badge>{text}</Badge>
          ))}
          <Spacer height="10px" />
          {renderAst(currentPost?.bodyAst)}
          <Text style={{ textAlign: 'right' }} color="text">
            {createdAt2}
          </Text>
        </Box>
      </Flex>
    </Section.Container>
  )
}

export default PostPage
