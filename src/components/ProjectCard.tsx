import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import { Text } from 'rebass/styled-components'
import styled from 'styled-components'
import Heading2 from '../shared/Heading2'
import { Tooltip } from '../shared/Tooltip'
import { Project } from '../types'
import ImageSubtitle from './ImageSubtitle'

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  type,
  logo,
  slug,
  isSideProject,
}) => {
  return (
    <a href={`/project/${slug}`}>
      <div className="bg-background rounded-3xl shadow-xl overflow-hidden p-0 transition ease-in-out hover:scale-105 cursor-pointer w-full h-full">
        <div className="flex flex-row p-4 h-full">
          <div className="w-2/3 pb-10">
            <div className="mb-2">
              <Heading2>
                <span className="border-b-4 border-primaryLight">
                  {name}
                  {isSideProject ? (
                    <Tooltip content="Side Project">
                      <SparklesIcon className="absolute top-4 right-2 text-yellow-300 h-8 w-8" />
                    </Tooltip>
                  ) : null}
                </span>
              </Heading2>
            </div>
            <p className="line-clamp-4">{description}</p>
          </div>
          <div className="flex items-center justify-center w-1/3">
            {/* //? Should I keep this component on the top right corner? */}
            {/* //? It looks ugly but it's a nice shortcut */}
            {/* <div className="flex flex-row absolute top-0 right-4">
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
                    name="Go to project"
                    fontAwesomeIcon="globe"
                    url={projectUrl}
                  />
                </Box>
              )}
            </div> */}
            {logo.image.src && (
              <div className="h-full flex justify-center items-center">
                <img
                  src={logo.image.src}
                  alt={logo.title}
                  className="w-full px-2 max-h-20 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
          {type}
        </ImageSubtitle>
      </div>
    </a>
  )
}

export default ProjectCard
