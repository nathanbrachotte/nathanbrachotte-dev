import React from 'react'

interface PlayStoreProps {
  width: number
}

const RATIO = 250 / 646

const PlayStore: React.FC<PlayStoreProps> = ({ width = 646 }) => {
  return (
    <img
      src={require('./googlePlay.png')}
      width={`${width}px`}
      height={`${width * RATIO}px`}
      className="p-0"
      alt="play store link"
    />
  )
}

export default PlayStore
