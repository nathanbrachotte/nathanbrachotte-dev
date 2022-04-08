import { Heading, Text } from 'rebass/styled-components'
import styled from 'styled-components'

export const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
  color: ${(props) => props.theme.colors.primary} 5px solid;
`

export const TextEllipsis = styled(Text).attrs({
  mt: '20px',
  mb: '20px',
})`
  ::before {
    display: inline;
    content: '"';
  }

  ::after {
    display: inline;
    content: '"';
  }

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.textDark};
`
