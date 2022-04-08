import React from 'react'

const Heading3: React.FC = ({ children }) => {
  return (
    <h3 className="text-base md:text-lg text-primary-dark font-semibold">
      {children}
    </h3>
  )
}

export default Heading3
