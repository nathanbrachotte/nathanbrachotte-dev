import { ExternalLinkIcon } from '@heroicons/react/solid'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { VerticalTimeline as VerticalTimelineLib } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Text } from 'rebass/styled-components'
import styled from 'styled-components'
import Section from '../../components/Section'
import Heading2 from '../../shared/Heading2'
import { Tooltip } from '../../shared/Tooltip'
import Background from './Background'
import { data } from './data'
import { JobElement, RecommendationElement } from './Elements'
import { JobIcon } from './JobIcon'
import { TextEllipsis } from './StyledComponents'

const VerticalTimeline = styled(VerticalTimelineLib)`
  &::before {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`

const Timeline: React.FC = () => {
  return (
    <Section.Container id="Recommendations" Background={Background}>
      <Section.Header name="Recommendations" icon="✨" label="speech bubble" />
      <Fade bottom>
        <VerticalTimeline
          className="vertical-timeline-custom-line"
          animate={false}>
          {data.map((item) => {
            switch (item.type) {
              case 'job':
                return (
                  <JobElement
                    key={`job-${item.title}-${item.company}`}
                    link={item.link}
                    className="vertical-timeline-element--work"
                    date={item.timeframe}
                    icon={<JobIcon icon="⬆️" />}>
                    <Heading2>
                      <span className="text-white">
                        {item.title} at {item.company}
                      </span>
                    </Heading2>
                    <Text />
                  </JobElement>
                )
              case 'review':
                return (
                  <RecommendationElement
                    key={`job-${item.name}-${item.personPosition}`}
                    link={item.link}
                    className="vertical-timeline-element"
                    date={item.workedTogetherTimeframe}
                    icon={<JobIcon icon="💬" />}>
                    <div className="p-2">
                      <Heading2>
                        {item.name}
                        {'\n'}-{'\n'}
                        {item.personPosition}
                      </Heading2>
                      <TextEllipsis>{item.description}</TextEllipsis>
                      <div className="absolute top-2 right-2 h-8 w-8">
                        <Tooltip content="Go to recommendation">
                          <ExternalLinkIcon className="text-secondaryDark" />
                        </Tooltip>
                      </div>
                    </div>
                  </RecommendationElement>
                )

              default:
                throw new Error(
                  'Unrecognized data sample in Timeline component',
                )
            }
          })}
        </VerticalTimeline>
      </Fade>
    </Section.Container>
  )
}

export default Timeline
