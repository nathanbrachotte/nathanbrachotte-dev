import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component'
import styled from 'styled-components'

import 'react-vertical-timeline-component/style.min.css'
import { Review } from './data'

interface VerticalTimelineElementStyledProps
  extends VerticalTimelineElementProps {
  isCurrent: boolean
  link?: Review['link']
}

const BOX_BORDER_RADIUS = '20px'

export const RecommendationElement = styled(
  VerticalTimelineElement,
).attrs<VerticalTimelineElementStyledProps>((props) => ({
  type: 'text',
  contentStyle: {
    borderRadius: BOX_BORDER_RADIUS,
    background: props.theme.colors.alwaysWhite,
    color: props.theme.colors.textLight,
  },
  iconStyle: {
    backgroundColor: props.theme.colors.alwaysWhite,
  },
  ...(props.link
    ? {
        onTimelineElementClick: () => {
          if (props?.link?.external) {
            window.open(props.link.external)
          }

          if (props?.link?.internal) {
            window.open(props.link.internal)
          }
        },
      }
    : null),
}))`
  .vertical-timeline-element-icon,
  .vertical-timeline-element-content,
  .vertical-timeline-element-date {
    cursor: pointer;
  }

  .vertical-timeline-element-date {
    color: var(--textDark);
  }
`

export const JobElement = styled(
  RecommendationElement,
).attrs<VerticalTimelineElementStyledProps>((props) => ({
  type: 'text',
  contentStyle: {
    borderRadius: BOX_BORDER_RADIUS,
    background: props.theme.colors.secondaryDark,
    color: props.theme.colors.alwaysWhite,
  },
  contentArrowStyle: {
    borderRight: `7px solid  ${props.theme.colors.secondaryDark}`,
  },
  iconStyle: {
    background: props.theme.colors.secondaryDark,
  },
}))`
  @media only screen and (max-width: 1170px) {
    .vertical-timeline-element-date {
      color: var(--alwaysWhite);
    }
  }
`
