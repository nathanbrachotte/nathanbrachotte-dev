import React from 'react'

const Heading3: React.FC = ({ children }) => {
  return (
    <p className="text-base md:text-lg text-primary-dark font-semibold">
      {children}
    </p>
  )
}

export default Heading3
