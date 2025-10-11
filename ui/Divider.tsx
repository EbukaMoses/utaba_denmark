import React from 'react'

const Divider = ({className}: {className?: string}) => {
  return (
    <div className={`w-full h-1 !z-50 ${className}`}></div>
  )
}

export default Divider
