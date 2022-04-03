import React from 'react'

interface Heading2Props {}

const Heading2: React.FC<Heading2Props> = ({ children }) => {
  return (
    <p className="text-primary-dark font-extrabold py-1 text-xl md:text-2xl">
      {children}
    </p>
  )
}

export default Heading2
