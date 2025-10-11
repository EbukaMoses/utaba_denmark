import React from 'react'

const HeaderThree = ({title, className}: {title: string; className?: string}) => {
  return (
    <h3 className={`text-lg font-medium text-gray-600 whitespace-nowrap ${className}`}>{title}</h3>
  )
}

export default HeaderThree
