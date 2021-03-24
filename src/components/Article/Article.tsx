import React from 'react'
import { Heading, Text, Flex, Box } from 'rebass/styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import ImageSubtitle from '../ImageSubtitle'
import Section from '../Section'
import { CardContainer, Card } from '../Card'

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`

interface ArticleProps {
  title: string
  text: string
  image: string
  url?: string
  date: string
  time: number
}

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const Article: React.FC<ArticleProps> = ({
  title,
  text,
  image,
  url,
  date,
  time,
}) => (
  <a
    href={url}
    target="__blank"
    title={title}
    style={{ textDecoration: 'none' }}>
    <Card pb={4}>
      <EllipsisHeading m={3} p={1} color="text">
        {title}
      </EllipsisHeading>
      {image && <CoverImage src={image} height="200px" alt={title} />}
      <Text m={3} color="text">
        {text}
      </Text>
      <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
        {`${date} - ${Math.ceil(time)} min`}
      </ImageSubtitle>
    </Card>
  </a>
)

export default Article
