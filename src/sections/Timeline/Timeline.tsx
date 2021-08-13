import React from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
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
  color: ${(props) => props.theme.colors.secondaryDark};
`

interface Job {
  type: 'job'
  title: string
  company: string
  timeframe: string
  location: string
  keywords: string
  fontAwesomeIcon: string
  isImportant: boolean
}

interface Review {
  type: 'review'
  name: string
  workedTogetherTimeframe: string
  description: string
  link: string
}

const data: (Job | Review)[] = [
  {
    type: 'job',
    title: 'Software Engineer',
    company: 'Klarna GmbH',
    keywords: 'Klarna Card, React, React Native, SEO, Online Marketing',
    timeframe: 'Jan 2020 - Present',
    location: 'Berlin 🇩🇪',
    fontAwesomeIcon: 'laptop',
    isImportant: true,
  },
  {
    type: 'review',
    name: 'Varun Pal',
    description:
      '"Nathan and I worked in Klarna for 1.5 years. Nathan is a unique engineer who makes everything better for the end customer. He goes beyond the task requirements and adds customer wow features like Accessibility, animations and an improved UX. He continuously aligns with designers and improves the designs so that end users get the best experience. Nathan is very thorough in his work and holds discussions with stakeholders, documents everything properly and presents his work to a wider audience through engaging demos. I was very lucky to have Nathan in my team and I wish him the best for his future."',
    workedTogetherTimeframe: 'July 2020',
    link: 'https://www.linkedin.com/in/nathan-brachotte/',
  },
]

const MiddleIcon: React.FC<{ icon: string }> = ({ icon }) => (
  // FIXME: know the joke about centering a div?
  // <div
  //   style={{
  //     height: 40,
  //     width: 40,
  //     flex: 1,
  //     backgroundColor: 'red',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   }}>
  //   <Text
  //     flex={1}
  //     fontSize="20px"
  //     textAlign="center"
  //     // bg="red"
  //   >
  <span aria-label="engineer logo" role="img">
    {icon}
  </span>
  //   </Text>
  // </div>
)

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
                  icon={<MiddleIcon icon="🧑‍💻" />}>
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
                  icon={<MiddleIcon icon="💬" />}>
                  <EllipsisHeading
                    className="vertical-timeline-element-title"
                    color="textDark"
                    as="h3">
                    Recommendation
                  </EllipsisHeading>
                  <Text style={{ textOverflow: 'ellipsis', maxHeight: '80px' }}>
                    {item.description}
                  </Text>
                  <p>Varun Pal - Team Lead</p>
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
              console.log(item)
              throw new Error('Unrecognized data sample in Timeline component')
              break
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
