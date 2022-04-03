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

export const getTechnoIcon = (techno: string): JSX.Element => {
  switch (techno) {
    case 'AWS'.toLowerCase():
      return <AWS />
    case 'Bitbucket'.toLowerCase():
      return <Bitbucket />
    case 'CSS'.toLowerCase():
      return <CSS />
    case 'Cypress'.toLowerCase():
      return <Cypress />
    case 'Expo'.toLowerCase():
      return <Expo />
    case 'Express'.toLowerCase():
      return <Express />
    case 'Figma'.toLowerCase():
      return <Figma />
    case 'Gatsby'.toLowerCase():
      return <Gatsby />
    case 'GraphQl'.toLowerCase():
      return <GraphQl />
    case 'Github'.toLowerCase():
      return <Github />
    case 'Html'.toLowerCase():
      return <Html />
    case 'Iterm'.toLowerCase():
      return <Iterm />
    case 'JavaScript'.toLowerCase():
      return <JavaScript />
    case 'Jest'.toLowerCase():
      return <Jest />
    case 'Jira'.toLowerCase():
      return <Jira />
    case 'Netlify'.toLowerCase():
      return <Netlify />
    case 'Next'.toLowerCase():
      return <Next />
    case 'Notion'.toLowerCase():
      return <Notion />
    case 'mongodb':
      return <MongoDB />
    case 'Prisma'.toLowerCase():
      return <Prisma />
    case 'react':
      return <ReactLogo />
    case 'react-native':
      return <ReactNative />
    case 'Redis'.toLowerCase():
      return <Redis />
    case 'Sketch'.toLowerCase():
      return <Sketch />
    case 'Tailwind'.toLowerCase():
      return <Tailwind />
    case 'TypeScript'.toLowerCase():
      return <TypeScript />
    case 'StyledComponents'.toLowerCase():
      return <StyledComponents />
    case 'Webhooks'.toLowerCase():
      return <Webhooks />

    default:
      console.log('default')
      return (
        <Tooltip content={techno}>
          <div style={{ height: 40, backgroundColor: 'red' }}>
            <Icon icon={`logos:${techno}`} height={40} />
          </div>
        </Tooltip>
      )
  }
}
