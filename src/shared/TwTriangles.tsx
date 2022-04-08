import React from 'react'

const TwTriangles: React.FC = () => {
  return (
    <>
      <div className="w-16 overflow-hidden inline-block">
        <div className=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" />
      </div>
      <div className="w-16 overflow-hidden inline-block">
        <div className=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" />
      </div>

      <div className="w-16 overflow-hidden inline-block">
        <div className=" h-11 w-11 bg-black -rotate-45 transform origin-top-left" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black -rotate-45 transform origin-top-right" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black rotate-45 transform origin-top-left" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black -rotate-45 transform origin-bottom-right" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black rotate-45 transform origin-bottom-left" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black -rotate-45 transform origin-top-left" />
      </div>

      <div className="w-11  overflow-hidden inline-block">
        <div className=" h-16  bg-black rotate-45 transform origin-top-right" />
      </div>
    </>
  )
}

export default TwTriangles
