import React from 'react'

import { VerticalTimeline } from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { Text } from 'rebass/styled-components'
import {
  BlockQuote,
  BottomRightSection,
  EllipsisHeading,
  TextEllipsis,
} from './StyledComponents'

import { JobIcon } from './JobIcon'
import { JobElement, RecommendationElement } from './Elements'
import useTheme from '../../hooks/useTheme'

import 'react-vertical-timeline-component/style.min.css'
import { data } from './data'

const Timeline: React.FC = () => {
  const theme = useTheme()

  return (
    <div style={{ backgroundColor: theme.colors.primaryLight }}>
      <VerticalTimeline className="vertical-timeline-custom-line">
        {data.map((item) => {
          switch (item.type) {
            case 'job':
              return (
                <JobElement
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
                </JobElement>
              )
            case 'review':
              return (
                <RecommendationElement
                  link={item.link}
                  className="vertical-timeline-element"
                  date={item.workedTogetherTimeframe}
                  icon={<JobIcon icon="💬" />}>
                  <EllipsisHeading
                    className="vertical-timeline-element-title"
                    color="textDark"
                    as="h3">
                    Recommendation
                  </EllipsisHeading>
                  <BlockQuote>
                    <TextEllipsis>{item.description}</TextEllipsis>
                  </BlockQuote>
                  <Text>
                    {item.name}
                    {'\n'}-{'\n'}
                    {item.personPosition}
                  </Text>
                  <BottomRightSection>
                    <FontAwesomeIcon
                      size="1x"
                      icon={faExternalLinkAlt}
                      aria-label="Visit"
                    />
                  </BottomRightSection>
                </RecommendationElement>
              )

            default:
              throw new Error('Unrecognized data sample in Timeline component')
          }
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
