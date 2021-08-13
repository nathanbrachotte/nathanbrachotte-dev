import React from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { Text, Heading } from 'rebass/styled-components'

import MouseIcon from '../../shared/MouseIcon'
import { JobIcon } from './JobIcon'
import { PrimaryElement, Element } from './Elements'
import useTheme from '../../hooks/useTheme'

import 'react-vertical-timeline-component/style.min.css'
import './overides.css'
import { data } from './data'

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
  color: ${(props) => props.theme.colors.primary} 5px solid;
`

const BottomRightSection = styled.div`
  position: absolute;
  right: 3%;
  bottom: 8%;
  color: ${(props) => props.theme.colors.primary};
`

const Timeline: React.FC = () => {
  const theme = useTheme()

  return (
    <div style={{ backgroundColor: theme.colors.primaryLight }}>
      <VerticalTimeline>
        {data.map((item) => {
          const WrappingElement =
            'isImportant' in item && item.isImportant ? PrimaryElement : Element

          switch (item.type) {
            case 'job':
              return (
                <WrappingElement
                  className="vertical-timeline-element--work"
                  date={item.timeframe}
                  icon={<JobIcon icon="💻" />}>
                  <EllipsisHeading
                    className="vertical-timeline-element-title"
                    color="textDark"
                    as="h3">
                    {item.title}
                  </EllipsisHeading>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.company}
                  </h4>
                  <p>{item.keywords}</p>
                  <p>{item.location}</p>
                </WrappingElement>
              )
            case 'review':
              return (
                <WrappingElement
                  className="vertical-timeline-element"
                  date={item.workedTogetherTimeframe}
                  icon={<JobIcon icon="💬" />}>
                  <EllipsisHeading
                    className="vertical-timeline-element-title"
                    color="textDark"
                    as="h3">
                    Recommendation
                  </EllipsisHeading>
                  <Text
                    m="2px"
                    overflow="hidden"
                    sx={{
                      maxHeight: '100px',
                      mx: 'auto',
                      textOverflow: 'ellipsis',
                    }}>
                    {item.description}
                  </Text>
                  <Text>Varun Pal - Team Lead</Text>
                  <BottomRightSection>
                    <FontAwesomeIcon
                      size="1x"
                      icon={faExternalLinkAlt}
                      aria-label="Visit"
                    />
                  </BottomRightSection>
                </WrappingElement>
              )

            default:
              throw new Error('Unrecognized data sample in Timeline component')
          }
        })}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MouseIcon onClick={() => null} />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MouseIcon onClick={() => null} />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<MouseIcon onClick={() => null} />}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MouseIcon onClick={() => null} />}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
