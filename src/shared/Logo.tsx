import React from 'react'
import { Image } from 'rebass'

interface LogoProps {
  logoUrl: string
}

export const LOGO_SIZES = [40, 50, 60]
const Logo: React.FC<LogoProps> = ({ logoUrl }) => {
  return <Image alt="Nathan logo" src={logoUrl} size={LOGO_SIZES} />
}
export default Logo
