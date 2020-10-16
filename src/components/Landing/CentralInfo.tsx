import React from 'react'
import TextLoop from 'react-text-loop'

import { Heading, Text } from 'rebass/styled-components'
import { centerHorizontally } from '../../styles/helpers'
import { SocialLinksWrapper } from './SocialLink'

export const CentralInfo: React.FC<CentralInfoProps> = ({
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
        fontSize={[6, 7]}
        mb={[3, 4, 5]}>
        {`Hello, I'm ${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="textDark"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}>
        <TextLoop
          springConfig={{ stiffness: 100, damping: 15 }}
          interval={1000}>
          {roles.map((text) => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>
      <SocialLinksWrapper socialLinks={socialLinks} />
    </>
  )
}
