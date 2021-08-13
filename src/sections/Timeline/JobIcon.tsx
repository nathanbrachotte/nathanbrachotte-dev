import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import { Flex } from 'rebass'

export const JobIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <Flex
    height="100%"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap">
    <FontAwesomeIcon name={icon} />
  </Flex>
)
