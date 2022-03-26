import React from 'react'
import TextLoop from 'react-text-loop'

import { Heading, Text } from 'rebass/styled-components'
import { centerHorizontally } from '../../styles/helpers'
import { SocialLinksWrapper } from './SocialLink'

const CentralInfo: React.FC<CentralInfoProps> = ({
  roles,
  socialLinks,
  name,
}) => {
  return (
    <>
      <Heading
        textAlign="center"
        as="h1"
        color="text"
        fontSize={[4, 5]}
        mb={[3, 4]}>
        Hi{' '}
        <span role="img" aria-label="hand-emoji">
          👋
        </span>{' '}
        {`I'm ${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="textDark"
        fontSize={[4, 5]}
        mb={[3, 4]}
        textAlign="center"
        style={centerHorizontally}>
        <TextLoop interval={1000}>
          {roles.map((text) => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>
      <SocialLinksWrapper socialLinks={socialLinks} color="primaryDark" />
    </>
  )
}

export default CentralInfo
