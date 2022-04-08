import React from 'react'

const Heading1: React.FC = ({ children }) => {
  return (
    <h1 className="text-primary-dark font-extrabold py-1 text-2xl md:text-3xl">
      {children}
    </h1>
  )
}

export default Heading1
