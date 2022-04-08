import React from 'react'

const Heading2: React.FC = ({ children }) => {
  return (
    <h2 className="text-primary-dark font-extrabold py-1 text-xl md:text-2xl">
      {children}
    </h2>
  )
}

export default Heading2
