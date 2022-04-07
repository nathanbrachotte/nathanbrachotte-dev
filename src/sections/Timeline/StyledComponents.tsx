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

export const BlockQuote = styled.div`
  ::before {
    display: block;
    /* padding-right: 10px; */
    content: '\201C';
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #7a7a7a;
  }
  /* ::after {
    /* content: '"'; */
  } */
  /* font-family: Georgia, serif;
  position: relative;
  margin: 0.5em;
  /* right 0.5em 2em 0.5em 3em; */

  &:before {
    font-family: Georgia, serif;
    font-size: 6em;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 0;
    content: '\201C';
  }
  &:after {
    font-family: Georgia, serif;
    position: absolute;
    float: right;
    font-size: 6em;
    line-height: 1;
    right: 0;
    bottom: -0.5em;
    content: '\201D';
  }

  blockquote footer {
    /* right 0 2em 0 0; */
    text-align: right;
  }
  blockquote cite:before {
    content: '\2013';
  } */
`

export const TextEllipsis = styled(Text).attrs(() => ({
  mt: '20px',
  mb: '20px',
}))`
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
