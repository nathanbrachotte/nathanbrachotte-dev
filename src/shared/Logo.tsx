import React from 'react'
import { Image } from 'rebass'

interface LogoProps {
  logoUrl: string
}

const Logo: React.FC<LogoProps> = ({ logoUrl }) => {
  return <Image alt="Nathan logo" src={logoUrl} size={[40, 50, 60, 70]} />
}
export default Logo
