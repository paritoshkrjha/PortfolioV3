import React from 'react'

function Container({ children }) {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="lg:w-[50%] md:w-[70%] sm:w-[70%] w-[90%] flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

export default Container
