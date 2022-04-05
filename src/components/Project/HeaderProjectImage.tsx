import React from 'react'
import 'react-medium-image-zoom/dist/styles.css'

interface HeaderProjectImageProps {
  url: string
  alt: string
}

const WIDTHS = [280, 560, 840, 1100, 1650, 2500, 2100, 3100]

const HeaderProjectImage: React.FC<HeaderProjectImageProps> = ({
  url,
  alt,
}) => {
  const srcSet = WIDTHS.map((w: number) => {
    return `https://${url}?w=${w}&fm=webp   ${w}w,`
  }).join('\n')

  return (
    <div className="overflow-hidden rounded-bl-3xl max-h-[70vh]">
      <img
        className="object-cover object-center w-full"
        src={`https://${url}?w=560&fm=webp`}
        srcSet={srcSet}
        alt={alt}
        sizes="(max-width:1023px) 80vw, (min-width:1024px) and (max-width:1620px) 67vw, 1100px"
      />
    </div>
  )
}

export default HeaderProjectImage
