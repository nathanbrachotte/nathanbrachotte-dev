import React from 'react'
import {
  Image,
  Text,
  Flex,
  Box,
  Card as CardRebass,
} from 'rebass/styled-components'
import styled from 'styled-components'

import { breakpoints, sizeUpperBand } from '../styles/sizes'
import { BORDER_RADIUS } from './Article/constants'
import ImageSubtitle from './ImageSubtitle'
import { SocialLink } from '../sections/Landing/SocialLink'

interface ProjectProps {
  name: string
  description: string
  projectUrl: string
  repositoryUrl: string
  type: string
  publishedDate: string
  logo: {
    image: {
      src: string
    }
    title: string
  }
}

const ProjectCard: React.FC<ProjectProps> = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => {
  return (
    <div className="flex flex-row bg-background rounded-lg shadow-md">
      <div>
        <div className="bg-slate-400">{name}</div>
        {description}
      </div>
      {logo?.image?.src && (
        <img
          src={logo.image.src}
          alt={logo.title}
          className="w-40 h-40 aspect-square p-9 mt-0 "
        />
      )}
      <div>
        <div className="flex flex-row">
          <Box fontSize={5}>
            <SocialLink
              name="Check repository"
              fontAwesomeIcon="github"
              url={repositoryUrl}
            />
          </Box>
          <Box fontSize={5}>
            <SocialLink
              name="See project"
              fontAwesomeIcon="globe"
              url={projectUrl}
            />
          </Box>
        </div>
        <div className="bg-primary">{type}</div>
        {/* <div>{publishedDate}</div> */}
      </div>
      {/* <Car©d pb={4} onClick={onClick}>
        <EllipsisHeading m={3} p={1} color="text">
        {title}
        </EllipsisHeading>
        {image && <CoverImage src={image} height="200px" alt={title} />}
        <Text m={3} color="textLight">
          {text}
        </Text>
        <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
          {`${new Date(date).toLocaleDateString()} - ${Math.ceil(
            text?.length / WORD_PER_MINUTE,
          )} min`}
        </ImageSubtitle>
      </Card> */}
    </div>
  )
}

export default ProjectCard
