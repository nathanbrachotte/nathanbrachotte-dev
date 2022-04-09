import React from 'react'
import { Box, Link } from 'rebass/styled-components'
import { Color } from '../../../colors'
import { getTechnoIcon } from '../../helpers/getTechnoIcon'

interface Links {
  id: number
  fontAwesomeIcon: string
  name: string
  url: string
}

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
  <Link
    href={url}
    target="_blank"
    color={color}
    rel="noreferrer"
    aria-label={name}
    className="transition duration-200 hover:scale-110 mr-1 pt-2 xl:mr-2 flex justify-center items-center">
    {getTechnoIcon(fontAwesomeIcon, 40, name)}
  </Link>
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
      <Box mx={[3]} key={id}>
        <SocialLink {...rest} color={color} />
      </Box>
    ))}
  </div>
)
