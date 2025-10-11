import React from 'react'

const HeaderTwo = ({title, className}: {title: string; className?: string}) => {
  return (
        <h2 className={`text-2xl font-semibold text-gray-700 whitespace-nowrap ${className}`}>{title}</h2>

  )
}

export default HeaderTwo
