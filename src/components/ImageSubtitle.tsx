import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { BORDER_RADIUS, BORDER_SPACING } from './Article/constants'

const BORDER_PATH_MAP = {
  'top-left': `polygon(0 0%, 100% 0%, calc(100% - ${BORDER_SPACING}) 100%, 0% 100%);`,
  'top-right': `polygon(0 0%, 100% 0%, 100% 100%, ${BORDER_SPACING} 100%);`,
  'bottom-right': `polygon(${BORDER_SPACING} 0%, 100% 0%, 100% 100%, 0% 100%);`,
  'bottom-left': `polygon(0 0%, calc(100% - ${BORDER_SPACING}) 0%, 100% 100%, 0% 100%);`,
}

const BORDER_RADIUS_MAP = {
  'top-left': `${BORDER_RADIUS} 0 0 0`,
  'top-right': `0 ${BORDER_RADIUS} 0 0`,
  'bottom-right': `0 0 ${BORDER_RADIUS} 0`,
  'bottom-left': `0 0 0 ${BORDER_RADIUS}`,
}

const ImageSubtitle = styled(Box)`
  position: absolute;
  display: inline;
  padding: 10px 25px 10px 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => props.x}: 0;
  ${(props) => props.y}: 0;

  ${(props) =>
    props.x === 'left'
      ? `padding-right: ${BORDER_SPACING};`
      : `padding-left: ${BORDER_SPACING};`}
  clip-path: ${(props) => BORDER_PATH_MAP[`${props.y}-${props.x}`]};

  ${(props) =>
    props.round &&
    `border-radius: ${BORDER_RADIUS_MAP[`${props.y}-${props.x}`]};`}
`

export default ImageSubtitle
