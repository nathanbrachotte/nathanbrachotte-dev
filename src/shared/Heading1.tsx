import React from 'react'

interface Heading1Props {}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
  return (
    <h1 className="text-primary-dark font-extrabold py-1 text-2xl md:text-3xl">
      {children}
    </h1>
  )
}

export default Heading1
