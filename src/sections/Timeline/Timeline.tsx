import React from 'react'
import { VerticalTimeline as VerticalTimelineLib } from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { Text } from 'rebass/styled-components'
import styled from 'styled-components'
import {
  BlockQuote,
  BottomRightSection,
  EllipsisHeading,
  TextEllipsis,
} from './StyledComponents'

import { JobIcon } from './JobIcon'
import Section from '../../components/Section'
import { JobElement, RecommendationElement } from './Elements'

import { data } from './data'
import Background from './Background'
import 'react-vertical-timeline-component/style.min.css'

const Fade = require('react-reveal/Fade')

const VerticalTimeline = styled(VerticalTimelineLib)`
  &::before {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`

const Timeline: React.FC = () => {
  return (
    // <StaticQuery
    //   query={graphql`
    //     query BlogPostQuery2 {
    //       allContentfulBlogPost {
    //         edges {
    //           node {
    //             id
    //             tags
    //             title
    //             createdAt
    //             body {
    //               body
    //               childMarkdownRemark {
    //                 htmlAst
    //               }
    //             }
    //             description {
    //               description
    //             }
    //             heroImage {
    //               id
    //               file {
    //                 fileName
    //                 url
    //               }
    //             }
    //             video {
    //               video
    //             }
    //             dev
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={() => {
    // return (
    <Section.Container id="Endorsements" Background={Background}>
      <Section.Header name="Endorsements" icon="✨" label="speech bubble" />
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
                    <EllipsisHeading
                      className="vertical-timeline-element-title"
                      color="textDark"
                      as="h3">
                      {item.title} at {item.company}
                    </EllipsisHeading>
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
                throw new Error(
                  'Unrecognized data sample in Timeline component',
                )
            }
          })}
        </VerticalTimeline>
      </Fade>
    </Section.Container>
    // )
    //   }}
    // />
  )
}

export default Timeline
