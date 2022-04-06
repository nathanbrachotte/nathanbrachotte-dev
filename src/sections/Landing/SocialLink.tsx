import React from 'react'

import FontAwesomeIcon from 'react-fontawesome'
import { Box, Flex, Link } from 'rebass/styled-components'
import styled from 'styled-components'
import { Tooltip } from '../../shared/Tooltip'

import { Color } from '../../../colors'

interface IconLinkProps {
  color?: Color
}

const IconLink = styled(Link)<IconLinkProps>`
  transition: color 0.5s;
  color: ${(props) => {
    return props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primaryDark
  }};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`

interface SocialLinkProps {
  fontAwesomeIcon: string
  name: string
  url: string
  color?: Color
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  fontAwesomeIcon,
  name,
  url,
  color,
}) => (
  <Tooltip content={name}>
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}>
      <FontAwesomeIcon name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
)

interface SocialLinksWrapperProps {
  socialLinks: Links[]
  color: Color
}

export const SocialLinksWrapper: React.FC<SocialLinksWrapperProps> = ({
  socialLinks,
  color,
}) => (
  <div className="flex justify-center flex-wrap mt-0 sm:mt-2 md:mt-6">
    {socialLinks.map(({ id, ...rest }) => (
      <Box mx={[3]} fontSize={[5, 6]} key={id}>
        <SocialLink {...rest} color={color} />
      </Box>
    ))}
  </div>
)
