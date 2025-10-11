import React from 'react'

const HeaderOne = ({title, className}: {title: string; className?: string}) => {
  return (
   <h1 className={`text-4xl font-bold text-gray-800 whitespace-nowrap ${className}`}>{title}</h1>
  )
}

export default HeaderOne
