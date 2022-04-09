import React from 'react'
import { Heading, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import Image from '../../shared/Image'
import { Card } from '../Card'
import ImageSubtitle from '../ImageSubtitle'

const AVERAGE_WORD_PER_MINUTE_READ = 200

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`

interface SharedArticleProps {
  title: string
  text: string
  image: string
  date: string
}

interface ExternalArticleProps extends SharedArticleProps {
  url: string
}

interface InternalArticleProps extends SharedArticleProps {
  onClick: () => void
}

const CoverImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`

export const ExternalArticle: React.FC<ExternalArticleProps> = ({
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
    <Card pb={4} onClick={() => null}>
      <EllipsisHeading m={3} p={1} color="text">
        {title}
      </EllipsisHeading>
      {image && <Image url={url} alt={title} height={200} width={400} />}
      <Text m={3} color="text">
        {text}
      </Text>
      <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
        {`${date} - ${Math.ceil(time)} min`}
      </ImageSubtitle>
    </Card>
  </a>
)

export const InternalArticle: React.FC<InternalArticleProps> = ({
  title,
  text,
  image,
  onClick,
  date,
}) => (
  <Card pb={4} onClick={onClick}>
    <EllipsisHeading m={3} p={1} color="text">
      {title}
    </EllipsisHeading>
    {image && (
      <Image
        url={image}
        alt={title}
        height={200}
        width={400}
        sizes={[280, 560]}
      />
    )}
    <Text m={3} color="textLight">
      {text}
    </Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${new Date(date).toLocaleDateString()} - ${Math.ceil(
        text?.length / AVERAGE_WORD_PER_MINUTE_READ,
      )} min`}
    </ImageSubtitle>
  </Card>
)
