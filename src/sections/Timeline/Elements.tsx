import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component'
import styled from 'styled-components'

import 'react-vertical-timeline-component/style.min.css'

interface VerticalTimelineElementStyledProps
  extends VerticalTimelineElementProps {
  isCurrent: boolean
}

const BOX_BORDER_RADIUS = '20px'

export const Element = styled(
  VerticalTimelineElement,
).attrs<VerticalTimelineElementStyledProps>((props) => ({
  type: 'text',
  contentStyle: {
    marginTop: '-5px',
    borderRadius: BOX_BORDER_RADIUS,
    background: props.theme.colors.alwaysWhite,
    color: props.theme.colors.secondaryDark,
  },
  iconStyle: {
    color: props.theme.colors.secondaryDark,
    backgroundColor: props.theme.colors.alwaysWhite,
  },
}))``

export const PrimaryElement = styled(
  Element,
).attrs<VerticalTimelineElementStyledProps>((props) => ({
  type: 'text',
  contentStyle: {
    marginTop: '-5px',
    borderRadius: BOX_BORDER_RADIUS,
    background: props.theme.colors.secondaryDark,
    color: props.theme.colors.alwaysWhite,
  },
  contentArrowStyle: {
    borderRight: `7px solid  ${props.theme.colors.secondaryDark}`,
  },
  iconStyle: {
    background: props.theme.colors.secondaryDark,
    color: props.theme.colors.alwaysWhite,
  },
}))``
