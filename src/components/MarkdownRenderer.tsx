import PropTypes from 'prop-types'
import React from 'react'
import { SectionLink } from 'react-scroll-section'
import styled from 'styled-components'

const MarkdownParagraph = styled.p`
  line-height: 2em;
  &:first-child {
    margin-top: 0em;
  }
`

const MarkdownList = styled.ul`
  margin: 0;
`

const MarkdownListItem = styled.li`
  margin: 1em 0;
  line-height: 2em;
`

export const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#')
  return isInnerLink ? (
    <SectionLink section={href.substring(1, href.length)}>
      {({ onClick }) => <StyledLink onClick={onClick}>{children}</StyledLink>}
    </SectionLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  )
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  listItem: MarkdownListItem,
  link: MarkdownLink,
}
