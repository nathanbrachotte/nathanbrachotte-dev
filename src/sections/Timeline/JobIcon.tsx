import React from 'react'
import { Flex } from 'rebass'

export const JobIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <Flex
    height="100%"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap">
    <span aria-label="speech bubble" role="img" className="text-2xl">
      {icon}
    </span>
  </Flex>
)
