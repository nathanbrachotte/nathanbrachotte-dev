import { Icon } from '@iconify/react'
import React from 'react'
import AWS from '../assets/AWS'
import Bitbucket from '../assets/Bitbucket'
import CSS from '../assets/CSS'
import Cypress from '../assets/Cypress'
import Expo from '../assets/Expo'
import Express from '../assets/Express'
import Figma from '../assets/Figma'
import Gatsby from '../assets/Gatsby'
import Github from '../assets/Github'
import GraphQl from '../assets/Graphql'
import Html from '../assets/Html'
import Iterm from '../assets/Iterm'
import JavaScript from '../assets/JavaScript'
import Jest from '../assets/Jest'
import Jira from '../assets/Jira'
import MongoDB from '../assets/MongoDB'
import Netlify from '../assets/Netlify'
import Next from '../assets/Next'
import NodeJs from '../assets/NodeJs'
import Notion from '../assets/Notion'
import Prisma from '../assets/Prisma'
import ReactLogo from '../assets/React'
import ReactNative from '../assets/ReactNative'
import Redis from '../assets/Redis'
import Sketch from '../assets/Sketch'
import Storybook from '../assets/Storybook'
import StyledComponents from '../assets/StyledComponents'
import Tailwind from '../assets/Tailwind'
import TypeScript from '../assets/TypeScript'
import Webhooks from '../assets/Webhooks'
import { Tooltip } from '../shared/Tooltip'

export const getTechnoIcon = (techno: string, size: number): JSX.Element => {
  switch (techno) {
    case 'AWS'.toLowerCase():
      return <AWS width={size} />
    case 'Bitbucket'.toLowerCase():
      return <Bitbucket width={size} />
    case 'CSS'.toLowerCase():
      return <CSS width={size} />
    case 'Cypress'.toLowerCase():
      return <Cypress width={size} />
    case 'Expo'.toLowerCase():
      return <Expo width={size} />
    case 'Express'.toLowerCase():
      return <Express height={size * 0.5} />
    case 'Figma'.toLowerCase():
      return <Figma height={size} />
    case 'Gatsby'.toLowerCase():
      return <Gatsby width={size} />
    case 'GraphQl'.toLowerCase():
      return <GraphQl width={size} />
    case 'Github'.toLowerCase():
      return <Github width={size} />
    case 'Html'.toLowerCase():
      return <Html width={size} />
    case 'Iterm'.toLowerCase():
      return <Iterm width={size} />
    case 'JavaScript'.toLowerCase():
      return <JavaScript width={size} />
    case 'Jest'.toLowerCase():
      return <Jest width={size} />
    case 'Jira'.toLowerCase():
      return <Jira width={size} />
    case 'Netlify'.toLowerCase():
      return <Netlify width={size} />
    case 'Next'.toLowerCase():
      return <Next width={size} />
    case 'Notion'.toLowerCase():
      return <Notion width={size} />
    case 'nodejs':
      return <NodeJs height={size} />
    case 'mongodb':
      return <MongoDB height={size} />
    case 'Prisma'.toLowerCase():
      return <Prisma width={size} />
    case 'react':
      return <ReactLogo width={size} />
    case 'react-native':
      return <ReactNative width={size} />
    case 'Redis'.toLowerCase():
      return <Redis width={size} />
    case 'Sketch'.toLowerCase():
      return <Sketch width={size} />
    case 'Tailwind'.toLowerCase():
      return <Tailwind height={size * 0.65} />
    case 'TypeScript'.toLowerCase():
      return <TypeScript width={size} />
    case 'storybook':
    case 'storybook-icon':
      return <Storybook width={size * 0.9} />
    case 'StyledComponents'.toLowerCase():
      return <StyledComponents width={size} />
    case 'Webhooks'.toLowerCase():
      return <Webhooks width={size} />

    default:
      return (
        <Tooltip content={techno}>
          <div style={{ height: size || 40 }}>
            <Icon icon={`logos:${techno}`} height={size || 40} />
          </div>
        </Tooltip>
      )
  }
}
