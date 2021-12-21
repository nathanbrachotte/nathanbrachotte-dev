import React from 'react'
import { Flex } from 'rebass'

export const JobIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <Flex
    height="100%"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap">
    <span aria-label="engineer logo" role="img">
      {icon}
    </span>
  </Flex>
)
