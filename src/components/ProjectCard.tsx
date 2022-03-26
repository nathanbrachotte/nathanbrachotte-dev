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
import { Title } from '../sections/Projects/Project'

interface ProjectProps {
  name: string
  description: string
  projectUrl?: string
  repositoryUrl?: string
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
    <div className="bg-background rounded-3xl shadow-lg overflow-hidden p-0 transition hover:scale-105 cursor-pointer h-full">
      <div className="flex flex-row p-4">
        <div className="w-2/3">
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
          <p className="line-clamp-4">{description}</p>
        </div>
        <div className="flex items-center justify-center w-1/3">
          <div className="flex flex-row absolute top-0 right-4">
            {repositoryUrl && (
              <Box fontSize={5} mr={2}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repositoryUrl}
                />
              </Box>
            )}
            {projectUrl && (
              <Box fontSize={5}>
                <SocialLink
                  name="See project"
                  fontAwesomeIcon="globe"
                  url={projectUrl}
                />
              </Box>
            )}
          </div>
          {logo.image.src && (
            <img
              src={logo.image.src}
              alt={logo.title}
              className="w-16 aspect-square"
            />
          )}
          {/* <div>{publishedDate}</div> */}
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
