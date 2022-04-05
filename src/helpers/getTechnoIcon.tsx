import React from 'react'
import { Icon } from '@iconify/react'

import { Tooltip } from '../shared/Tooltip'

import CSS from '../../media/CSS'
import Cypress from '../../media/Cypress'
import Figma from '../../media/Figma'
import Gatsby from '../../media/Gatsby'
import Html from '../../media/Html'
import Iterm from '../../media/Iterm'
import JavaScript from '../../media/JavaScript'
import Jest from '../../media/Jest'
import Next from '../../media/Next'
import ReactLogo from '../../media/React'
import ReactNative from '../../media/ReactNative'
import Sketch from '../../media/Sketch'
import Tailwind from '../../media/Tailwind'
import TypeScript from '../../media/TypeScript'
import StyledComponents from '../../media/StyledComponents'
import Expo from '../../media/Expo'
import Redis from '../../media/Redis'
import GraphQl from '../../media/Graphql'
import Express from '../../media/Express'
import Webhooks from '../../media/Webhooks'
import Prisma from '../../media/Prisma'
import Netlify from '../../media/Netlify'
import Notion from '../../media/Notion'
import Bitbucket from '../../media/Bitbucket'
import Jira from '../../media/Jira'
import AWS from '../../media/AWS'
import Github from '../../media/Github'
import MongoDB from '../../media/MongoDB'

export const getTechnoIcon = (techno: string, size?: number): JSX.Element => {
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
      return <Express height={size} />
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
      return <Tailwind height={size} />
    case 'TypeScript'.toLowerCase():
      return <TypeScript width={size} />
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
